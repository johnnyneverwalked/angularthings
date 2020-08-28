import {Injectable} from "@angular/core";

@Injectable({
    providedIn: "root",
})

export class HelperService {

    constructor() {
    }

  /**
   * @description Decodes an html formatted string and returns a clean string
   * @param {string} html - The string with html entities
   * @return the decoded html string
   */
  public static decodeHtml(html: string): string {
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  /**
   * @description Use await to delay the script execution by ms millis
   * @param ms    - The delay in milliseconds
   * @return An empty promise to use await on
   */
  public static sleep(ms: number = 0): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
