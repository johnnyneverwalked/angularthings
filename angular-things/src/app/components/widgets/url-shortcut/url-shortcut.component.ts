import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild} from "@angular/core";
import {Colors, RADIO_COLORS} from "../../../interfaces/Generics";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Location} from "@angular/common";
import {IWidgetModification} from "../../../interfaces/IGridWidget";
import {DefaultUrlSerializer, Router, UrlSerializer, UrlTree} from "@angular/router";
import {AppComponent} from "../../../app.component";

@Component({
    selector: "app-url-shortcut",
    templateUrl: "./url-shortcut.component.html",
    styleUrls: ["./url-shortcut.component.scss"]
})
export class UrlShortcutComponent implements OnInit, AfterViewInit, OnDestroy {

    @Input() displayName: string;
    @Input() icon: string;
    @Input() size: string = "";
    @Input() color: Colors;
    @Input() navigationUrl: string = "";

    @Output() modifyWidgetData: EventEmitter<IWidgetModification> = new EventEmitter<IWidgetModification>();
    @Output() changeUrl: EventEmitter<string> = new EventEmitter<string>();

    public form: FormGroup;
    public loading: boolean = false;
    public ellipsisColor: string = null;
    public radioColors = [] = RADIO_COLORS;

    private serializer: CustomUrlSerializer;

    @ViewChild("editModal", { read: ElementRef }) editModal: ElementRef;

    constructor(
        private renderer: Renderer2,
        private fb: FormBuilder,
        private router: Router,
        private location: Location,
        private cd: ChangeDetectorRef,
        public appComponent: AppComponent
    ) {
      this.serializer = new CustomUrlSerializer();
    }

    ngOnInit() {
        this.ellipsisColor = this._setEllipsisColor(this.color);
        this.form = this.fb.group({
            displayName: this.displayName,
            icon: this.icon,
            size: this.size,
            color: this.color,
            navigationUrl: unescape(this.navigationUrl) === "undefined" ? null : unescape(this.navigationUrl)
        });

        this.cd.detectChanges();
    }

    ngAfterViewInit(): void {
        this.renderer.appendChild(document.body, this.editModal.nativeElement);
    }

    ngOnDestroy(): void {
        this.renderer.removeChild(document.body, this.editModal.nativeElement);
    }

    /**
     * @description Parses the navigationUrl and redirects to it
     * @param {boolean} newTab  - Whether to open the link in a new tab
     */
    async navigate(newTab: boolean = false) {
        if (this.navigationUrl) {
            let url = this.navigationUrl.split("/").filter(str => str.length);
            if ([escape("http:"), escape("https:")].includes(url[0])) {
                url.splice(0, 2);
            }
            this.loading = true;
            this.changeUrl.emit(url.join("/"));
            let parsed = this.serializer.parse(url.join("/"));
            if (newTab) {
                await this.router.navigate([]).then(() => window.open(this.location.prepareExternalUrl(this.serializer.serialize(parsed)), "_blank"));
            } else {
                await this.router.navigateByUrl(parsed);
            }
            this.loading = false;
        }
    }

    /**
     * @description Propagates the widget"s data and options to the main grid to save them to the DB
     */
    editSave() {
        let data = this.form.value;
        this.displayName = data.displayName || this.displayName;
        this.icon = data.icon || this.icon;
        this.color = data.color || this.color;
        this.size = data.size !== null ? data.size : this.size;
        this.navigationUrl = escape(data.navigationUrl || this.navigationUrl);

        this.modifyWidgetData.emit({
            overwrite: true,
            data: {
                displayName: this.displayName,
                icon: this.icon,
                color: this.color,
                size: this.size,
                navigationUrl: this.navigationUrl
            },
            options: {
                class: this.size
            }
        });
    }

    /**
     * @description Sets the text color of the ellipsis icon
     * @param {Colors} color    - The color to be set
     * @private
     */
    private _setEllipsisColor(color: Colors): string {
        switch (color) {
            case "danger":
            case "info":
            case "primary":
            case "success":
            case "dark":
            case "secondary":
                return "text-white";
            case "light":
            case "warning":
                return "text-black";
        }
    }

}

class CustomUrlSerializer implements UrlSerializer {
  parse(url: any): UrlTree {
    const dus = new DefaultUrlSerializer();
    return dus.parse(unescape(url.toLowerCase()));
  }

  serialize(tree: UrlTree): any {
    const dus = new DefaultUrlSerializer();
    return dus.serialize(tree);
  }
}
