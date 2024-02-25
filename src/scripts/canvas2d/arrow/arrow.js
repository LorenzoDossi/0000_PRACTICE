let fromX = 100
let fromY = 100
let toX = 200
let toY = 200
let arrowAngle = Math.atan2(toY - fromY, toX - fromX)
let angle = PI / 7
let headLength = 10 / Math.cos(angle)

ctx.beginPath()
ctx.strokeStyle = 'blue'
ctx.fillStyle = 'blue'
ctx.lineWidth = 1
ctx.moveTo(fromX, fromY)
ctx.lineTo(toX, toY)
ctx.stroke()

ctx.beginPath()
ctx.moveTo(toX, toY)

ctx.lineTo(toX - headLength * Math.cos(arrowAngle - angle), toY - headLength * Math.sin(arrowAngle - angle))
ctx.lineTo(toX - headLength * Math.cos(arrowAngle + angle), toY - headLength * Math.sin(arrowAngle + angle))

ctx.moveTo(toX, toY)
ctx.fill()
ctx.stroke()
