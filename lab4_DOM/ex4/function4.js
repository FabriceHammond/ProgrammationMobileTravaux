function pos(){
var positionX = document.getElementById("x");
var positionY = document.getElementById("y");

	document.addEventListener("mousemove", function(a){
		positionX.innerHTML = "Mouse position on X :" + a.clientX;
		})
	
	document.addEventListener("mousemove", function(a){
		positionY.innerHTML = "Mouse position on Y :" + a.clientY;
		})
}
pos();