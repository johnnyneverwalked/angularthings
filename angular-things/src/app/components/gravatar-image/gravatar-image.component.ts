import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from "@angular/core";

@Component({
    selector: "app-gravatar-image",
    templateUrl: "./gravatar-image.component.html",
    styleUrls: ["./gravatar-image.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GravatarImageComponent {
    @Input("size") set setSize(size: number) {
        this.size = size;
        this.cd.markForCheck();
    }
    @Input("value") set setValue(value: string) {
        this.value = value;
        this.cd.markForCheck();
    }

    public ratio: number = 3;

    public value: string;
    public size: number = 30;

    constructor(private cd: ChangeDetectorRef) {
    }
}
