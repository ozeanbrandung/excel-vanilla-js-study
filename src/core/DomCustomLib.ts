export class DomCustomLib {
    private _nativeDomElem: HTMLElement;
    //private listeners: ()=>void[];

    constructor(nodeOrSelector: HTMLElement | string) {
        this._nativeDomElem = typeof nodeOrSelector === 'string'
            ? document.querySelector(nodeOrSelector)
            : nodeOrSelector;
    }

    on(eventName, callback) {
        //this.listeners[eventName] = callback;
        this._nativeDomElem.addEventListener(eventName, callback);
    }

    off(eventName, callback) {
        //const cb = this.listeners[eventName];
        this._nativeDomElem.removeEventListener(eventName, callback);
    }

    // function to get element's html or set it
    html(htmlStr?: string) {
        if (htmlStr) {
            this._nativeDomElem.innerHTML = htmlStr;
            // chaining js pattern!!! ex: something.html('<div>hello world</div>').next()
            return this;
        } else {
            // получает сериализованный HTML-фрагмент, описывающий элемент, включая его потомков
            return this._nativeDomElem.outerHTML.trim();
        }
    }

    // у элементов и так есть этот метод, однако мы должны его переопределить для инстансов нашего класса
    // ведь они же не чистые дом-элементы, а в нашей кастомной обертке
    append(elem: HTMLElement | DomCustomLib) {
        // и кстати тут могли бы использовать полифил, но зачем, если есть babel?
        // if (Element.prototype.append) {
        //     this._nativeDomElem.append(elem)
        // } else {
        //     this._nativeDomElem.appendChild(elem)
        // }
        if (elem instanceof DomCustomLib) {
            elem = elem._nativeDomElem;
        }
        this._nativeDomElem.append(elem);
    }
}

//export type DomCustomLibType = typeof DomCustomLib;

export function $(nodeOrSelector: HTMLElement | string) {
    return new DomCustomLib(nodeOrSelector)
}

// export type $FunctionType = {
//     create: () => DomCustomLib;
//     (nodeOrSelector: HTMLElement | string): DomCustomLib;
// };

$.create = (tagName: string, ...classNames: string[]) => {
    const newElement = document.createElement(tagName);
    if (classNames) {
        // elem.classList.add("ok", "understand");
        // TODO: тут бы удостовериться как-то что нет в массиве undefind-ов
        newElement.classList.add(...classNames.filter(Boolean));
    }
    // make it Dom instances to get access to all methods above
    return $(newElement);
}