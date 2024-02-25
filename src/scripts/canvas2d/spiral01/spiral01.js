drawSpiral(ctx, 100, 100, 75, 2, 'red')
function drawSpiral(context, cx, cy, initialRadius, loops, color) {
    var totalAngle = loops * 2 * Math.PI;
    var angleIncrement = 0.5;
    var radiusIncrement = initialRadius / (totalAngle / angleIncrement);
    var radius = 0;

    context.strokeStyle = color;
    context.beginPath();
    context.moveTo(cx, cy);

    for(var angle = 0; angle < totalAngle; angle += angleIncrement) {
        radius += radiusIncrement;
        var x = cx + radius * Math.cos(angle);
        var y = cy + radius * Math.sin(angle);
        context.lineTo(x, y);
    }

    context.stroke();
}
