
/**
 * class Emitter : Create a local socket object to send and receive events.
 * @version 1.0.0
 * @author ImTheSpyke
 */
export default class Emitter {
    eventsNames: {[key:string]:any}
    on: Function
    emit: Function
    removeListeners: Function
    removeAllListeners: Function
    countListeners: Function
    constructor() {
        this.eventsNames = {}
        
        this.on = (callName:string, callback_f:Function) => {
            if(typeof callback_f != 'function') throw new Error("Callback must must type of 'function'.")
            if(this.eventsNames[callName] == undefined) this.eventsNames[callName] = []
            this.eventsNames[callName].push(callback_f)
        }
        this.emit = (callName:string, ...datasList:any[]) => {
            if(this.eventsNames[callName] == undefined) return;
            for(let i in this.eventsNames[callName]) {
                try { this.eventsNames[callName][i](...datasList) } catch(e) { }
            }
        }
        this.removeListeners = (callName:string) => (this.eventsNames[callName] = [])
        this.removeAllListeners = () => (this.eventsNames = {})
        this.countListeners = (callName:string) => (this.eventsNames[callName] != undefined ? this.eventsNames[callName].length : 0)
    }
}