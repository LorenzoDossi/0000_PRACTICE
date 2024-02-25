let fromX = 300
let fromY = 300
let angle = 0
let length = 40

clock()
function clock() {
    angle += 0.01

    let toX = fromX + length * Math.cos(angle)
    let toY = fromY + length * Math.sin(angle)

    ctx.clearRect(0, 0, width, height)

    ctx.beginPath()
    ctx.strokeStyle = 'blue'
    ctx.lineWidth = 2


    ctx.moveTo(fromX, fromY)
    ctx.lineTo(toX, toY)
    ctx.stroke()

    requestAnimationFrame(clock)
}
