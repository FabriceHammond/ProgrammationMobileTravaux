function guessing(){
	var random = Math.floor((Math.random() * 20) + 1);
	guess1=prompt("guess that numbah m8!");
	
	while (guess1 != random) {
		if (guess1 < random){
		guess1=prompt("u too low m8!");
		}
		else if (guess1 > random){
		guess1=prompt("u too high m8!");
		}
	}
	document.getElementById("demo").innerHTML =
	"congradulation m8! u did it m8! u rly r the vury best m8! the answer was: " + random +" m8!";
}