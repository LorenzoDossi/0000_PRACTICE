let cX = 300
let cY = 300
let cRadius = 50
let points = 10
let pointRadius = 10
let angleAmount = 2 * PI / points

for (let i = 0; i < points; i++) {
    let angle = i * angleAmount
    let posX = cX + cRadius * Math.cos(angle)
    let posY = cY + cRadius * Math.sin(angle)
    ctx.beginPath()
    ctx.arc(posX, posY, pointRadius, 0, PI * 2)
    ctx.stroke()
}
