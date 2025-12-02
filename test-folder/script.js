import Emitter from '../dist/index.js'

class testing extends Emitter {
    constructor() {
        super()
    }
}


let a = new testing()

a.on("test", () => console.log("test"))
a.emit("test")