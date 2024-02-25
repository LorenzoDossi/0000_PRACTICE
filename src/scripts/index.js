import experience from './webgl/webgl'
import properties from './global/properties'

class Main {
    constructor() {
        this.dateTime = performance.now()
        this.start()
    }

    start() {
        experience.init()

        this.loop()
    }

    loop() {
        let newDateTime = performance.now()
        let dt = (newDateTime - this.dateTime) / 1000
        this.dateTime = newDateTime

        properties.time += dt

        experience.update(dt)
        requestAnimationFrame(this.loop.bind(this))
    }
}

new Main()
