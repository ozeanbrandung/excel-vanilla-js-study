import {Component} from "../../core/Component";

export class Toolbar extends Component {
    static className: string = 'excel__toolbar';

    constructor(private _rootElemInstance) {
        super(_rootElemInstance, {});
    }

    toHtml(): string {
        //return super.toHtml();
        return `
          <div class="button">
            <i class="material-icons">format_align_left</i>
          </div>
    
          <div class="button">
            <i class="material-icons">format_align_center</i>
          </div>
    
          <div class="button">
            <i class="material-icons">format_align_right</i>
          </div>
    
          <div class="button">
            <i class="material-icons">format_bold</i>
          </div>
    
          <div class="button">
            <i class="material-icons">format_italic</i>
          </div>
    
          <div class="button">
            <i class="material-icons">format_underlined</i>
          </div>
        `;
    }
}