function drawSpiral(context, centerX, centerY, initialRadius, loops, color) {
    const totalAngle = loops * 2 * Math.PI; // Total angle the spiral will cover
    const angleIncrement = 0.01; // Smaller for a smoother spiral
    const radiusIncrement = initialRadius * angleIncrement / (2 * Math.PI); // Adjust for smoother increment
    let radius = 0;

    context.strokeStyle = color;
    context.beginPath();
    context.moveTo(centerX, centerY);

    for (let angle = 0; angle <= totalAngle; angle += angleIncrement) {
        radius += radiusIncrement;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        context.lineTo(x, y);
    }

    context.stroke();
}
