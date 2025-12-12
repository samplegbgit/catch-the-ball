const paddle = document.getElementById("paddle");
const game = document.getElementById("game");

let paddleX = 160;

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
    ball.style.top = ballTop + 5 + "px";

    if (ballTop > 600) {
        ball.style.top = "0px";
        ball.style.left = Math.random() * 380 + "px";
    }

    requestAnimationFrame(dropBall);
}

dropBall();
