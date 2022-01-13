


var slide = document.getElementById("slide");
var upArrow = document.getElementById("upArrow");
var downArrow = document.getElementById("downArrow");

let x = 0;

downArrow.onclick = function(){
	if(x >"-1200"){
	x = x - 300;
	slide.style.top = x + "px";
	}
}
upArrow.onclick = function(){
	if(x < 0){
	x = x + 300;
	slide.style.top = x + "px";
	}
}
