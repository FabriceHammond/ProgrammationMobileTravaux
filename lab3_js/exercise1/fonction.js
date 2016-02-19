function tableMulti(){
	var m0 =0;	var m1 =1;	var m2 =2;	var m3 =3;
	var m4 =4;	var m5 =5;	var m6 =6;	var m7 =7;
	var m8 =8;	var m9 =9;	var m10 =10;
	
	var number = prompt("Please enter an int", "0");
	if (number != null) {
		m0 = m0*number;		m1 = m1*number;		m2 = m2*number;
		m3 = m3*number;		m4 = m4*number;     m5 = m5*number;
		m6 = m6*number;		m7 = m7*number;		m8 = m8*number;
		m9 = m9*number;		m10= m10*number;
		
		document.getElementById("demo").innerHTML =
		"here's your multiplication table with your chosen number multiplied with number from 0 to 10: "
		+ m0 + " "+ m1 + " "+ m2 + " "+ m3 
		+ " "+ m4 +" "+ m5 + " "+ m6 + " "
		+ m7 + " "+ m8 + " "+ m9 + " "+ m10;
	}
}
