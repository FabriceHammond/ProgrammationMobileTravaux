function mathMachine(){
	var math = prompt("Insert your soo hard math here", "0");
	if (math != null) {
		var a= eval(math) ;
		document.getElementById("demo").innerHTML =
		"here's your mathematicalysh aproximuh answer m8: " + a;
	}
}