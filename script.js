let dots = document.querySelector(".dots");
let hour = document.querySelector("#hour");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let digitalClock = document.querySelector(".digital-clock p");

function time() {
	// get hours, mins, secs form Date class
	let date = new Date();
	let hh = date.getHours();
	let mm = date.getMinutes();
	let ss = date.getSeconds();

	let rotateHour = 30 * hh + mm / 2;
	let rotateMin = 6 * mm;
	let rotateSec = 6 * ss;

	hour.style.transform = `rotate(${rotateHour}deg)`;
	min.style.transform = `rotate(${rotateMin}deg)`;
	sec.style.transform = `rotate(${rotateSec}deg)`;

	digitalClock.innerText = `${hh < 10 ? "0" + hh : hh}:${
		mm < 10 ? "0" + mm : mm
	}:${ss < 10 ? "0" + ss : ss}`;
}

setInterval(time);

for (i = 1; i <= 60; i++) {
	let dot = document.createElement("span");
	let b = document.createElement("b");
	dot.appendChild(b);
	dots.appendChild(dot);
	dot.classList.add("dot");
	dot.style = `--r:${i};`;

	if (i % 5 == 0) {
		dot.style.display = "none";
	}
}
