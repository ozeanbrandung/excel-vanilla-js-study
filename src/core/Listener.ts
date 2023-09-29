import {DomCustomLib} from "./DomCustomLib";

export class Listener {
    constructor(private _rootElemInstance: DomCustomLib, private listeners: (keyof HTMLElementEventMap)[]) {
        if (!_rootElemInstance) {
            throw new Error('no root provided for dom listener!')
        }
    }

    addEventListeners() {
        this.listeners.forEach(listener => {
            const callbackName = getCallbackName(listener);
            console.log(this);
            // nb! this тут без потери контекста можно использовать только если это стрелочная функция!
            // обычная функция создает свой собственный контекст
            //this._rootElemInstance[callbackName] = this._rootElemInstance[callbackName].bind(this);
            //TODO: пока что мне не оч понятно почему в this у класса Listner попадает также и все что связано с Formula
            // nb! биндим для того чтобы в конкретном уже методе типа onInput onClick и тд
            // чтобы в нем был доступен контекст this!!!
            if (!this[callbackName]) {
                throw new Error(`Вы забыли реализовать метод ${callbackName} для ${this.name} компонента`)
            }
            this[callbackName] = this[callbackName].bind(this);
            // callback[callbackName] = callback[callbackName].bind(this);
            this._rootElemInstance.on(listener, this[callbackName]);
        })
    }

    removeEventListeners() {
        this.listeners.forEach(listener => {
            const callbackName = getCallbackName(listener);
            this._rootElemInstance.off(listener, this[callbackName]);
        })
    }
}

function getCallbackName(name: string): string {
    return 'on' + name.charAt(0).toUpperCase() + name.slice(1);
}