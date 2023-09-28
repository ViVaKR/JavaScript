function draw() {
  const canvas = document.getElementById('rectangle');

  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, 0, 200, 200);

    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 180, 180);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(20, 20, 160, 160);

    ctx.clearRect(30, 30, 140, 140);
  } else {
    console.log('Not Supported');
  }
}
// draw();

function drawPolygan() {
  const canvas = document.getElementById('polygan');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.fillStyle = '#f00';
    ctx.beginPath();
    ctx.moveTo(100, 0);
    ctx.lineTo(200, 100);
    ctx.lineTo(100, 200);
    ctx.lineTo(0, 100);
    ctx.closePath();
    ctx.fill();
  }
}
drawPolygan();
