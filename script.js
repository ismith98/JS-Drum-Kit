
document.addEventListener("keydown", playSound);

function playSound(e) {
	//Get the html element of the key that was pressed
	var key = document.querySelector(`.key[data-key='${e.keyCode}']`);
	if(key==null) return;
	//Get the html element of the audio for the key that was pressed
	var audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
	
	//Start playing the audio from the beginning each time you press the key
	audio.fastSeek(0);
	audio.play();
	
	//If the animation is already playing, then restart it
	key.classList.remove("playing");		
	key.classList.add("playing");
	
	function removeTransition(e) {
		if(e.propertyName != "transform" ) return;
		this.classList.remove("playing");
	}
	
	var keys = document.querySelectorAll(".key");
	keys.forEach(key => { key.addEventListener("transitionend", removeTransition);});
}