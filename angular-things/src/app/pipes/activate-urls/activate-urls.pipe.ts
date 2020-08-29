import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'activateUrls'})
export class ActivateUrlsPipe implements PipeTransform {

    private urlPattern = /(ftp|http|https):\/\/(\w+:?\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@\-\/]))?/;

    constructor() {
    }

    transform(text: string = "", warn?: boolean) {
        if (warn && text.split(" ").some(t => this.urlPattern.test(t))) {
            text += ` <br> <small>*** Don't click on links you don't know the origin of. ***</small>`;
        }
        return text.split(" ")
            .map(token => token.replace(this.urlPattern, `<a href="${token.startsWith("http") ? token : ("http://" + token)}" class="text-lightgrey" target="_blank">${token}<a>`))
            .join(" ");
    }
}
