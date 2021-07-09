var sceneryFrames = [
	{ transform: "translateX(100%)" },
	{ transform: "translateX(-100%)" },
];

var sceneryTiming = {
	duration: 36000,
	iterations: Infinity,
	playbackRate: -2,
};

var background = document.getElementById("background");

var backgroundMovement = background.animate(sceneryFrames, sceneryTiming);

backgroundMovement.currentTime =
	backgroundMovement.effect.getTiming().duration / 2;

setInterval(() => {
	if (backgroundMovement.playbackRate > 0.4) {
		backgroundMovement.playbackRate *= 0.9;
	}
}, 3000);

// var flyFaster = () => {
// 	backgroundMovement.playbackRate *= 1.1;
// };
// document.addEventListener("click", flyFaster);

document.querySelector(".play").addEventListener("click", () => {
	backgroundMovement.play();
});

document.querySelector(".pause").addEventListener("click", () => {
	backgroundMovement.pause();
});

document.querySelector(".speedUp").addEventListener("click", () => {
	backgroundMovement.playbackRate *= 10;
});

document.querySelector(".speedDown").addEventListener("click", () => {
	backgroundMovement.playbackRate *= 0.1;
});
