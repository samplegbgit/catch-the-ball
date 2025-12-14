const paddle = document.getElementById("paddle");
const ball = document.getElementById("ball");
const info = document.getElementById("info");

let paddleX = 160;
let ballY = 0;
let ballX = Math.random() * 380;

let score = 0;
let lives = 3;

ball.style.left = ballX + "px";

// Paddle movement
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") paddleX -= 25;
    if (e.key === "ArrowRight") paddleX += 25;

    if (paddleX < 0) paddleX = 0;
    if (paddleX > 320) paddleX = 320;

    paddle.style.left = paddleX + "px";
});

function resetBall() {
    ballY = 0;
    ballX = Math.random() * 380;
    ball.style.top = ballY + "px";
    ball.style.left = ballX + "px";
}

function gameLoop() {
    ballY += 4;
    ball.style.top = ballY + "px";

    // Collision
    if (
        ballY > 560 &&
        ballX > paddleX &&
        ballX < paddleX + 80
    ) {
        score++;
        info.innerText = `Score: ${score} | Lives: ${lives}`;
        resetBall();
    }

    // Missed ball
    if (ballY > 600) {
        lives--;
        info.innerText = `Score: ${score} | Lives: ${lives}`;
        resetBall();

        if (lives === 0) {
            alert("Game Over! Score: " + score);
            location.reload();
        }
    }

    requestAnimationFrame(gameLoop);
}

gameLoop();
