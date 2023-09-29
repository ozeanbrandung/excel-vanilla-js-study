import {DomCustomLib} from "./DomCustomLib";
import {Listener} from "./Listener";

// export interface IComponent {
//     toHtml(): void;
// }
// export abstract class ComponentAbstract {
//     abstract toHtml(): void;
// }

export interface IComponentOptions {
    name?: string;
    listeners?: (keyof HTMLElementEventMap)[]
}

export class Component extends Listener {
    //abstract className: string;
    static className: string = '';
    private name: string;

    constructor(_rootElemInstance: DomCustomLib, options: IComponentOptions) {
        super(_rootElemInstance, options.listeners || []);
        this.name = options.name || '';
    }

    //нельзя!
    //abstract toHtml(): void;

    toHtml() {
        return ''
    }

    init() {
        // parent's method
        this.addEventListeners();
    }

    destroy() {
        // parent's method
        this.removeEventListeners();
    }
}

export type ComponentType = typeof Component;