function draw() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(200, 10);
    ctx.lineTo(10, 200);
    ctx.closePath();
    ctx.fillStyle = '#FF0000';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(300, 100);
    ctx.lineTo(350, 100);
    ctx.lineTo(350, 450);
    ctx.lineTo(300, 450);
    ctx.closePath();
    ctx.fillStyle = '#3366ff';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(150, 250, 100, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = '#00061a';
    ctx.fill();
}

window.onload = draw;