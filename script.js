var css = document.querySelector("h3");
var colorLeft = document.querySelector(".color-left");
var colorRight = document.querySelector(".color-right");
var body = document.getElementById("gradient");
var randBtn = document.getElementById("rand");

body.style.background = "linear-gradient(to right, " + colorLeft.value + ", " + colorRight.value + ")";
css.textContent = body.style.background + ";";

function colorOneTwo() {
	body.style.background = "linear-gradient(to right, " + colorLeft.value + ", " + colorRight.value + ")";
	css.textContent = body.style.background + ";";
}

function randomColor() {
	return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

function colorOneTwoRandom() {
	body.style.background = "linear-gradient(to right, " + randomColor() + ", " + randomColor() + ")";
	css.textContent = body.style.background + ";";
}

colorLeft.addEventListener("input", colorOneTwo);

colorRight.addEventListener("input", colorOneTwo);

randBtn.addEventListener('click', colorOneTwoRandom);