import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output, ViewChild} from "@angular/core";
import {ChatEvents, ChatType, IChat, IChatMessage, IChatUser, StoredChats} from "../../interfaces/IChat";
import {ChatService} from "../../services/http/chat.service";
import {skip, take, takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {reverse} from "lodash";
import * as moment from "moment";
import {ChatBodyComponent} from "./components/chat-body/chat-body.component";
import {UserFacade} from "../../reducers/user/user.facade";
import {IUser} from "../../interfaces/IUser";
import {LocalStorageService} from "ngx-webstorage";
import IStringMap from "../../interfaces/StringMap";
import {HelperService} from "../../services/helper.service";
import {ChatFacade} from "../../reducers/chat/chat.facade";
import {ChatHelperService} from "../../services/chat-helper.service";
import {SiteService} from "../../services/site.service";
import {ChatFooterComponent} from "./components/chat-footer/chat-footer.component";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements AfterViewInit, OnDestroy {

  public readonly defaultDimensions = {
    heights: {
      mini: "380px",
      full: "100%"
    },
    widths: {
      mini: "300px",
      full: "100%"
    }
  };
  public readonly defaultColor = "bg-primary";

  @Input("topic") set defaultTopic(topic: string) {
    if (topic && topic !== this.topic) {
      this.initChat(topic);
    }
  }

  @Input() aspect: "mini" | "full" = "mini";

  @Input() static: boolean = false;
  @Input() hasSeen: boolean = true;
  @Input() showNotSeenYet: boolean = false;

  @Output() load = new EventEmitter<IChat>();

  user: IUser;
  chat: IChat;
  messages: IChatMessage[] = [];
  totalMessages: number = 0;

  failedToSend: IChatMessage[] = [];
  typing: string[] = [];

  topic: string;
  loading: boolean;
  loadingMore: boolean;
  restrictions: boolean;

  private _minimized: boolean = false;
  private _typingTimeouts: IStringMap<any> = {};
  private _unsub$: Subject<void> = new Subject<void>();
  private _unsubUser$: Subject<void> = new Subject<void>();

  @ViewChild("body", {static: false}) body: ChatBodyComponent;
  @ViewChild("footer", {static: false}) footer: ChatFooterComponent;

  constructor(
    // public socket: SocketService,
    private storage: LocalStorageService,
    private userFacade: UserFacade,
    private chatFacade: ChatFacade,
    public chatService: ChatService,
    public chatHelper: ChatHelperService,
    public site: SiteService,
  ) {
  }

  ngAfterViewInit() {
    this.userFacade.data.pipe(takeUntil(this._unsubUser$)).subscribe((user: IUser) => {
      if (user) {
        this.user = user;
        if (this.topic && !this.chat) {
          this.initChat(this.topic);
        }
      }
    });

    this._subscribeToEvents();
    // this.socket.chatEventChanges$.pipe(takeUntil(this._unsub$)).subscribe(() => {
    //     this._subscribeToEvents();
    // });
  }

  ngOnDestroy(): void {
    this._unsub$.next();
    this._unsubUser$.next();
    if (this.static) {
      if (this.static) {
        const active = this.storage.retrieve(StoredChats) || [];
        const chatIndex = active.findIndex(c => c.topic === this.topic);
        if (chatIndex !== -1) {
          active.splice(chatIndex, 1);
          this.storage.store(StoredChats, active);
        }
      }
    }
  }

  // ? non socket method
  private _subscribeToEvents() {
    this._unsub$.next();
    this.chatFacade.event.pipe(takeUntil(this._unsub$)).subscribe(event => {
      if (!event) {
        return;
      }
      switch (event.event) {
        case "newMessage$":
          this._handleNewMessage(event.message);
          break;
        case "updatedMessage$":
          this._handleExistingMessage(event.message);
          break;
        case "peopleJoined$":
          if (this.topic === event.topic) {
            this._addNewPeople(event.people);
          }
          break;
        case "updatedChat$":
          this._updateChat(event.chat);
          break;
      }
    });
  }

  // ? socket method
  // private _subscribeToEvents() {
  //     this._unsub$.next();
  //     this.socket.chatEvents.newMessage$?.pipe(takeUntil(this._unsub$)).subscribe(this._handleNewMessage.bind(this));
  //     this.socket.chatEvents.updatedMessage$?.pipe(takeUntil(this._unsub$)).subscribe(this._handleExistingMessage.bind(this));
  //     this.socket.chatEvents.messagesSeen$?.pipe(takeUntil(this._unsub$)).subscribe(this._handleMessagesSeen.bind(this));
  //     this.socket.chatEvents.updatedChat$?.pipe(takeUntil(this._unsub$)).subscribe(this._updateChat.bind(this));
  //     this.socket.chatEvents.userLeft$?.pipe(takeUntil(this._unsub$)).subscribe(evt => {
  //         if (evt.topic === this.topic) {
  //             let sub = this.chat.subscribers.find(s => (s.user?._id || s.user) === this.user);
  //             if (sub) {
  //                 sub.active = false;
  //             }
  //         }
  //     });
  //     this.socket.chatEvents.peopleJoined$?.pipe(takeUntil(this._unsub$)).subscribe(evt => {
  //         if (this.topic === evt.topic) {
  //             this._addNewPeople(evt.people);
  //         }
  //     });
  //     this.socket.chatEvents.typing$?.pipe(takeUntil(this._unsub$)).subscribe(evt => {
  //         if (this.topic === evt.topic) {
  //             this._addTypingUser(evt.user);
  //         }
  //     });
  // }

  private _handleNewMessage(message: IChatMessage) {
    if (this.topic !== message?.topic || !(this.currentSub?.active || this.static)) {
      return;
    }
    this.messages = [...this.messages, message];
    this.totalMessages++;
    setTimeout(() => this.body?.scrollToBottom(message.sender === this.user?._id));

    let userIndex = this.typing.indexOf(message.sender);
    if (userIndex !== -1) {
      clearTimeout(this._typingTimeouts[message.sender]);
      this.typing.splice(userIndex, 1);
    }
    if (message.sender !== this.user?._id) {
      this.chatFacade.unseen(this.topic, message);
    }
  }

  private _handleExistingMessage(message: IChatMessage) {
    if (this.topic !== message.topic || !(this.currentSub?.active || this.static)) {
      return;
    }
    const messageIndex = this.messages.findIndex(m => m._id === message._id);
    if (messageIndex !== -1) {
      this.messages.splice(messageIndex, 1);
      this.messages = HelperService.arrayInsert(this.messages, messageIndex, message);
    }
  }

  private _handleMessagesSeen(data: { topic: string, userId: string, messageIds: string[] }) {
    if (!this.hasSeen || this.topic !== data.topic) {
      return;
    }
    this.messages = this.messages.map(message => {
      if (data.messageIds.includes(message._id) && !message.seen?.find(u => (u.user?._id || u.user) === data.userId)) {
        message.seen?.push({
          user: data.userId,
          date: new Date()
        });

        message.viewSeen?.push({
          date: new Date(),
          notYet: false,
          user: data.userId
        });
      }
      return message;
    });
    this.chatFacade.seen(this.topic);
  }

  private _updateChat(chat: IChat) {
    if (this.topic !== chat.topic) {
      return;
    }

    if (!this.chat) {
      this.chat = chat;
    } else {
      this.chat.name = chat.name;
      this.chat.options = {...(chat.options || {})};
    }
    this.load.emit(this.chat);
  }

  private _addNewPeople(people: (string | IUser | any)[] = []) {
    let subUsers = this.chat?.subscribers.map(s => s.user?._id || s.user) || [];
    people.forEach(person => {
      let idx = subUsers.indexOf(person._id || person);
      if (idx !== -1) {
        this.chat.subscribers[idx].active = true;
      } else {
        this.chat?.subscribers.push({
          active: true,
          user: person
        });
      }
    });

    this.body?.recalculateSeen();
  }

  private _addTypingUser(user: string) {
    if (!user) {
      return;
    }
    let userIndex = this.typing.indexOf(user);
    if (userIndex === -1) {
      this.typing.push(user);
    }
    clearTimeout(this._typingTimeouts[user]);
    this._typingTimeouts[user] = setTimeout(() => {
      userIndex = this.typing.indexOf(user);
      if (userIndex !== -1) {
        this.typing.splice(userIndex, 1);
      }
    }, 2000);

    this.body?.scrollToBottom(false);
  }

  public async initChat(topic: string) {
    this.topic = topic || this.topic;
    if (!this.user?._id) {
      return;
    }
    this.loading = true;
    let chatRes = await this.chatService.findChat(topic, this.static).toPromise();

    this.chat = chatRes.chat;
    this.topic = this.chat.topic;

    await HelperService.sleep(500);
    this.getMessages(this.topic);
    if (this.static) {
      const active = this.storage.retrieve(StoredChats) || [];
      const chatIndex = active.findIndex(c => c.topic === this.topic);
      if (chatIndex !== -1) {
        active[chatIndex].static = true;
      } else {
        active.push({topic: this.topic, static: true});
      }
      this.storage.store(StoredChats, active);
    }

    this.chatFacade.data.pipe(take(1)).subscribe((chats: IChat[]) => {
      if (!chats.find(c => c.topic === this.topic)) {
        this.chatFacade.loadChats([this.chat]);
      }
    });

    this.load.emit(this.chat);
    this.loading = false;
  }

  public async getMessages(topic) {
    let messageRes = await this.chatService.getMessages(topic, null).toPromise();

      if (this.static) {
        this.messages = reverse(messageRes);
        // If the user belongs into the active subscribers of the chat
        if (this.chat.subscribers.some(sub => (sub.user._id || sub.user) === this.user._id && sub.active)) {
          // Gathering all messages that are not seen by this user
          this.markAsSeen();
        }
      } else {
        this.messages = reverse(
          messageRes
            .filter(m => moment(m.createdAt)
              .isSameOrAfter(moment(this.currentSub?.joinedAt)))
        );
      }
      this.chatFacade.seen(this.topic);
      for (let msg of this.messages) {
        if (msg.deleted || (msg.sender?._id || msg.sender) === this.user?._id) {
          continue;
        }
        if (!msg.seen?.find(u => (u.user?._id || u.user) === this.user?._id)) {
          this.chatFacade.unseen(msg.topic, msg);
        }
      }
      this.totalMessages = this.messages?.length;
      setTimeout(() => this.body?.scrollToBottom());
      this.loading = false;
  }

  public async joinChat() {
    if (this.user && !this.currentSub?.active) {
      await this.chatService.invite(this.topic, [this.user._id]).toPromise();
      if (this.currentSub) {
        this.currentSub.active = true;
      } else {
        this.chat.subscribers.push({
          active: true,
          user: this.user
        });
      }
      this.markAsSeen();
    }
  }

  public sendMessage(msg: Partial<IChatMessage>) {
    let message: IChatMessage = {
      sender: this.user._id,
      topic: this.topic,
      ...msg
    };
    this.chatService.sendMessage(message).subscribe(res => {});
  }

  public updateMessage(_id: string, options: any) {
    console.log(_id);
    this.chatService.updateMessage(_id, options).subscribe(res => {
    });
  }

  public startedTyping() {
    // this.socket.emit(ChatEvents.StartedTyping, {topic: this.topic, user: this.user?._id, socket: this.socket.id});
  }

  public loadMoreMessages() {
    if (this.loading || this.loadingMore) {
      return;
    }
    this.loadingMore = true;
    if (!this.messages) {
      this.messages = [];
    }
    const before = this.messages[0]?.createdAt;
    this.chatService.getMessages(this.topic, <string>before).subscribe(res => {
      if (res) {
        this.body.scrollToMessage(res.length);
        setTimeout(() => {
          let newMessages = reverse(res);
          if (this.static) {
            newMessages.filter(m => moment(m.createdAt)
              .isSameOrAfter(moment(this.currentSub?.joinedAt)));
          }
          this.messages.unshift(
            ...newMessages
          );
          if (!newMessages.length) {
            this.totalMessages = this.messages.length;
          } else if (!before) {
            // this.totalMessages = res.get().total;
          }
          this.markAsSeen();
          this.loadingMore = false;
        });
      } else {
        this.loadingMore = false;
      }
    });
  }

  public minimizeToggle() {
    if (this.aspect === "full") {
      this._minimized = false;
      return;
    }
    this._minimized = !this._minimized;
  }

  public onFocusText() {
    this.markAsSeen();
  }

  public closeChat() {
    let chatRooms = this.storage.retrieve(StoredChats) || [];
    let currentIndex = chatRooms.findIndex(chat => chat.topic === this.chat?.topic);
    if (currentIndex !== -1) {
      chatRooms.splice(currentIndex, 1);
    }
    this.storage.store(StoredChats, [...chatRooms]);
  }

  public markAsSeen() {
    const unseenMessages = this.messages.filter(message => !this.chatHelper.messageSeenBy(message, this.user._id));
    if (unseenMessages.length) {
      this.chatService.markAsSeen(this.topic, unseenMessages.map(m => m._id)).subscribe();
      this.chatFacade.seen(this.topic);
    }
  }

  get isMinimized() {
    return this._minimized;
  }

  get currentSub(): IChatUser {
    if (!this.user?._id) {
      return null;
    }
    return this.chat?.subscribers?.find(s => this.user._id === (s.user?._id || s.user));
  }

}
