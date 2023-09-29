import {Component} from "../../core/Component";
import {createTable} from "./table.template";

export class Table extends Component {
    static className: string = 'excel__table';

    constructor(private _rootElemInstance) {
        super(_rootElemInstance, {});
    }

    toHtml(): string {
        //return super.toHtml();
        return createTable(30);
    }
}