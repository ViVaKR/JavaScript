// Now this line will be the same size on the page
// but will look sharper on high-DPI devices!
canvas.width = 480;
canvas.height = 320;
let x = canvas.width / 2;
let y = canvas.height - 30;

let dx = 2;
let dy = -2;
let ctx = canvas.getContext('2d'); //setupCanvas(document.querySelector('canvas'));
let ballRadius = 5;
let paddleHeight = 5;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;
let lives = 3; // 플레이어 생명 수
let score = 0;
let continueGame = true;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

let message = document.getElementById("message");

const bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

function drawScrore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score, 8, 20);
}

function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
}

function drawBricks() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status === 1) {
                const brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                const brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "teal";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function collisionDetection() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            const b = bricks[c][r];
            if (b.status === 1) {
                if (x > b.x &&
                    x < b.x + brickWidth &&
                    y > b.y &&
                    y < b.y + brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if (score === brickRowCount * brickColumnCount) {
                        message.innerHTML = "YOU WIN, CONGRATULATIONS!";
                        show_confirm();
                    }
                }
            }
        }
    }
}

function setupCanvas(canvas) {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    return ctx;
}

function keyDownHandler(e) {
    if (e.key === "l" || e.key === "ArrowRight") {
        rightPressed = true;
    } else if (e.key === "j" || e.key === "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key === "l" || e.key === "ArrowRight") {
        rightPressed = false;
    } else if (e.key === "j" || e.key === "ArrowLeft") {
        leftPressed = false;
    }
}

function mouseMoveHandler(e) {
    const relativeX = e.clientX - canvas.offsetLeft; // 캔버스의 왼쪽 상단 모서리에서의 마우스의 상대적인 위치
    if (relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth / 2;
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "teal";
    ctx.fill();
    ctx.closePath();
}
let req = null;

function show_confirm() {
    var r = confirm("게임을 다시 시작하시겠습니까?");
    if (r == true) {
        document.location.reload();
    } else {
        document.location.href = 'gameover.html';
    }
}
async function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScrore();
    drawLives();
    collisionDetection();

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) { // 오른쪽 벽에 부딪히면
        dx = -dx;
    }
    if (y + dy < ballRadius) { // 위쪽 벽에 부딪히면
        dy = -dy; // 방향을 바꿔준다.
    }
    else if (y + dy > canvas.height - ballRadius - paddleHeight) { // paddle에 부딪히면
        if ((x > paddleX && x < paddleX + paddleWidth)) { // paddle의 범위 안에 있으면
            dy = -dy; // 패들에 부딪히면 방향을 바꿔준다.
        }
        else { // paddle의 범위 밖에 있으면
            lives--; // 생명을 하나 줄인다.
            if (!lives) { // 생명이 0이면 게임오버
                message.innerHTML = "GAME OVER";
                await new Promise(r => setTimeout(r, 3000));
                show_confirm();

            } else { // 생명이 남아있으면
                await new Promise(r => setTimeout(r, 1000));

                x = canvas.width / 2; // ball의 위치를 초기화
                y = canvas.height - 30; // ball의 위치를 초기화
                dx = 3; // ball의 속도를 초기화
                dy = -3; // ball의 속도를 초기화
                paddleX = (canvas.width - paddleWidth) / 2; // paddle의 위치를 초기화
            }
        }
    }

    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    }
    else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;

    req = requestAnimationFrame(draw);

}

draw();
