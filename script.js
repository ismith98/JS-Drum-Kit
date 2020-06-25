document.addEventListener("keydown", (e) => {
	//console.log(e.keyCode);
	var key = document.querySelector(`.key[data-key='${e.keyCode}']`);
	console.log(key);
	key.classList.add(".playing");
})