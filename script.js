const paddle = document.getElementById("paddle");
const game = document.getElementById("game");

let paddleX = 160;

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") paddleX -= 20;
    if (e.key === "ArrowRight") paddleX += 20;

    paddleX = Math.max(0, Math.min(320, paddleX));
    paddle.style.left = paddleX + "px";
});
