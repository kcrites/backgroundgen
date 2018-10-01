//Background Generator script by Ken Crites

var css = document.querySelector("h3");
var initColor1 = "#ff0000";
var initColor2 = "#ffff00";
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var ranColor = document.querySelector(".randomcolor");
var initBody = "linear-gradient(to right, " + initColor1 + "," + initColor2 + ")";

function setGradient(){
		body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
		css.textContent = body.style.background + ";";
	};

function setRandomGradient(newColor1, newColor2){

		body.style.background = "linear-gradient(to right, " + newColor1 + "," + newColor2 + ")";
		css.textContent = body.style.background + ";";
}

function setRandomColor(){
		var newColor1 = '#' + (Math.random().toString(16) + "000000").substring(2,8);
		var newColor2 = '#' + (Math.random().toString(16) + "000000").substring(2,8);
		setRandomGradient(newColor1, newColor2);
};


color1.value = initColor1;
color2.value = initColor2;
css.textContent = initBody + ";";


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
// Set random colors when button is clicked
ranColor.addEventListener("click", setRandomColor);

