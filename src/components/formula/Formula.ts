import {Component, IComponentOptions} from "../../core/Component";

const options:IComponentOptions = {
    name: 'Formula',
    listeners: ['input', 'click']
};

export class Formula extends Component {
    static className: string = 'excel__formula';

    constructor(_rootElemInstance) {
        super(_rootElemInstance, options);
    }

    toHtml(): string {
        //return super.toHtml();
        return `
            <div class="info">fx</div>
            <div class="input" contenteditable spellcheck="false"></div>
        `;
    }

    //if it's in listener's array then a fuction with such name should be made
    onInput() {
        console.log('input formula')
    }

    // onClick() {
    //     console.log('input click');
    // }
}