drawGrid(10)

function drawGrid(step) {
    let color = 'rgba(0, 0, 0, 0.25)';

    for (let x = 0; x < width; x += step) {
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
    }

    for (let h = 0; h < height; h += step) {
        ctx.beginPath()
        ctx.moveTo(0, h)
        ctx.lineTo(width, h)
        ctx.stroke()
    }
}
