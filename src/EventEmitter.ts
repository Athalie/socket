type TEventListener = (...args: any[]) => void;

class EventEmitter {
    private events: {[key: string]: TEventListener[]} = {};

    on(key: string, listener: TEventListener){
        if (!this.events[key]) {
            this.events[key] = [];
        }

        this.events[key].push(listener);
    }

    off(key: string, listener: TEventListener){
        if (this.events[key]) {
            this.events[key] = this.events[key].filter(l => l !== listener);
        }
    }

    emit(key: string, ...args: any[]){
        if (this.events[key]) {
            this.events[key].forEach((l) => l(args))
        }
    }
}