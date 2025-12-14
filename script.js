const paddle = document.getElementById("paddle");
const game = document.getElementById("game");
const scoreText = document.getElementById("score");

let paddleX = 160;
let score = 0;
let lives = 3;

let ball = document.createElement("div");
ball.classList.add("ball");
ball.style.left = Math.random() * 380 + "px";
ball.style.top = "0px";
game.appendChild(ball);

scoreText.innerHTML = `Score: ${score} | Lives: ${lives}`;

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") paddleX -= 25;
    if (e.key === "ArrowRight") paddleX += 25;

    paddleX = Math.max(0, Math.min(320, paddleX));
    paddle.style.left = paddleX + "px";
});

function resetBall() {
    ball.style.top = "0px";
    ball.style.left = Math.random() * 380 + "px";
}

function dropBall() {
    let top = parseInt(ball.style.top);
    let left = parseInt(ball.style.left);

    ball.style.top = top + 5 + "px";

    if (top > 560 && left > paddleX && left < paddleX + 80) {
        score++;
        scoreText.innerHTML = `Score: ${score} | Lives: ${lives}`;
        resetBall();
    }

    if (top > 600) {
        lives--;
        scoreText.innerHTML = `Score: ${score} | Lives: ${lives}`;
        resetBall();

        if (lives === 0) {
            alert(`Game Over! Your score = ${score}`);
            location.reload();
        }
    }

    requestAnimationFrame(dropBall);
}

dropBall();
