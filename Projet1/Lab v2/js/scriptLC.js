function valider(f){
	var user = f.UName.Value;
	var name = f.Name.Value;
	var fname = f.FamlyName.Value;
	var pass = f.passW.Value;
	var passC = f.passWCheck.Value;
	var mail = f.eMailAddr.Value;
	var city = f.City.Value;
	var gend = f.gender.Value;
	
	if(pass == passc){
		alert("password validation failled");
	};
	return true;
};

function list(l){
	var cunt = getElementById("cuntr").value;
};