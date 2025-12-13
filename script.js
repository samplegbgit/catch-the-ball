const paddle = document.getElementById("paddle");
const game = document.getElementById("game");

let paddleX = 160;

let score = 0;
let lives = 3;

let scoreBox = document.createElement("div");
scoreBox.style.color = "#fff";
scoreBox.style.padding = "10px";
scoreBox.innerHTML = `Score: ${score} | Lives: ${lives}`;
game.appendChild(scoreBox);

let ball = document.createElement("div");
ball.style.width = "20px";
ball.style.height = "20px";
ball.style.background = "yellow";
ball.style.borderRadius = "50%";
ball.style.position = "absolute";
ball.style.top = "0px";
ball.style.left = Math.random() * 380 + "px";

game.appendChild(ball);

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") paddleX -= 20;
    if (e.key === "ArrowRight") paddleX += 20;

    paddleX = Math.max(0, Math.min(320, paddleX));
    paddle.style.left = paddleX + "px";
});

function dropBall() {
    let ballTop = parseInt(ball.style.top);
    let ballLeft = parseInt(ball.style.left);

    ball.style.top = ballTop + 5 + "px";

    // collision detection
    if (ballTop > 560 && ballLeft > paddleX && ballLeft < paddleX + 80) {
        score++;
        scoreBox.innerHTML = `Score: ${score} | Lives: ${lives}`;
        resetBall();
    }

    if (ballTop > 600) {
        lives--;
        scoreBox.innerHTML = `Score: ${score} | Lives: ${lives}`;
        resetBall();

        if (lives === 0) {
            alert("Game Over! Score: " + score);
            location.reload();
        }
    }

    requestAnimationFrame(dropBall);
}

function resetBall() {
    ball.style.top = "0px";
    ball.style.left = Math.random() * 380 + "px";
}

dropBall();
