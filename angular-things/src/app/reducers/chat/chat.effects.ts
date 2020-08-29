// import {Injectable} from "@angular/core";
// import {Actions, createEffect, ofType} from "@ngrx/effects";
// import * as chatActions from "@reducers/chat/chat.actions";
// import {catchError, switchMap} from "rxjs/operators";
// import {ToastrService} from "ngx-toastr";
// import {ChatService} from "@http-services/chat.service";
// import {SocketService} from "@general-services/socket.service";
//
//
// @Injectable()
// export class ChatEffects {
//
//     constructor(
//         private actions$: Actions,
//         private chatService: ChatService,
//         private socket: SocketService,
//         private toastr: ToastrService,
//     ) {
//     }
//
//     loadChats$ = createEffect(() => this.actions$.pipe(
//         ofType(chatActions.load),
//         switchMap(() => this.chatService.listenToUserChats()),
//         switchMap(res => {
//             res.get()?.forEach(chat => this.socket.join(chat.topic));
//             return [chatActions.loadChats({data: res.get()})];
//         }),
//         catchError((err, caught) => {
//             console.error(err);
//             this.toastr.error("order -- Error: Could not load chats from the DB");
//             return caught;
//         })
//     ));
//
// }
