import {Component} from "../../core/Component";

export class Header extends Component {
    static className: string = 'excel__header';

    constructor(private _rootElemInstance) {
        super(_rootElemInstance, {});
    }

    toHtml(): string {
        //return super.toHtml();
        return `
            <input type="text" class="input" value="Новая таблица" />

              <div>
                <div class="button">
                  <i class="material-icons">delete</i>
                </div>
        
                <div class="button">
                  <i class="material-icons">exit_to_app</i>
                </div>
              </div>
        `;
    }
}