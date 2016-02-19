function sup(){
	var alpha = document.querySelectorAll('p'); 

	for(var s in alpha) 
	{ 
		alpha[s].parentNode.removeChild(alpha[s]); 
	}
}