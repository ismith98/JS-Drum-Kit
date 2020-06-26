document.addEventListener("keydown", (e) => {
	//console.log(e.keyCode);
	
	//Get the html element of the key that was pressed
	var key = document.querySelector(`.key[data-key='${e.keyCode}']`);
	//Get the html element of the audio for the key that was pressed
	console.log(key);
	key.classList.add("playing");
	key.addEventListener("transitionend", e => {
		if(e.propertyName != "transform" ) return;
		
		key.classList.remove("playing");
		console.log(e);
	})
	
})