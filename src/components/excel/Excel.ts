import {Component} from "../../core/Component";
import {$, DomCustomLib} from "../../core/DomCustomLib";

interface IExcelOptions {
    components: Component[];
}

export class Excel {
    //private components: {new(): Component}[] | Component[];
    //private components: Component[];
    private components: typeof Component[];
    private _appRootElem: DomCustomLib;

    constructor(appRootSelector: string, options?: IExcelOptions) {
        this.components = options?.components || []
        const appRootElem:HTMLElement = document.querySelector(appRootSelector);
        if (!appRootElem) {
            throw new Error('Корневой элемент приложения не найден по предоставленному селектору в dom-дереве')
        }
        this._appRootElem = $(appRootElem);
    }

    getLayout() {
        const contentContainerElem:DomCustomLib = $.create('div', ['excel']);
        this.components = this.components.map(Component => {
            const componentContainer:DomCustomLib = $.create('div', [Component.className]);
            const component:Component = new Component(componentContainer);
            // DEBUG
            if (component.name) {
                window['c' + component.name] = component;
            }
            // END DEBUG
            componentContainer.html(component.toHtml());
            contentContainerElem.append(componentContainer);
            return component;
        })
        this._appRootElem.append(contentContainerElem);
    }

    render() {
        this.getLayout();
        this.components.forEach(component => {
            component.init();
        })
    }
}