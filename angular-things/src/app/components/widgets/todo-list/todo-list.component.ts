import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import * as Muuri from "muuri";
import {slideRight} from "../../../animations/emerge.animation";

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
    animations: [
        slideRight
    ]
})
export class TodoListComponent implements AfterViewInit {

    private _todo: any;
    public tasks;
    public currentComment: string;
    public readonly NORMAL_LENGTH = 25;

    @ViewChild("todoList", {static: false}) todoList: ElementRef;

    constructor() {
        this.tasks = [
            {
                time: "12:00",
                name: "Reply to messages",
                comment: null,
                action: {
                    icon: "play",
                    color: "success"
                }
            },
            {
                time: "15:00",
                name: "Check orders",
                comment: "test comment",
                action: {
                    icon: "play",
                    color: "success"
                }
            },
            {
                time: "17:10",
                name: "Clean house",
                comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" +
                    " standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to" +
                    " make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting," +
                    " remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem" +
                    " Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem" +
                    " Ipsum.",
                action: {
                    icon: "pause",
                    color: "danger"
                }
            }
        ];
    }

    ngAfterViewInit() {
        this._todo = new Muuri(this.todoList.nativeElement, {
            items: '.todo-item',
            layoutEasing: 'ease',
            dragEnabled: true,
            dragSortInterval: 0,
            dragReleaseEasing: 'ease'
        }).on('dragStart', (item) => {
            item.getElement().style.width = item.getWidth() + 'px';
            item.getElement().style.height = item.getHeight() + 'px';
        }).on('dragReleaseEnd', (item) => {
            item.getElement().style.width = '';
            item.getElement().style.height = '';
        });
    }

}
