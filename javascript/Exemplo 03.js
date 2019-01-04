function somar(){
	var numero1 = document.getElementById("numero01").value;
	var numero2 = document.getElementById("numero02").value;
		
	if (numero1 == "") {
		numero1 = 0;
	} else {
		numero1 = parseInt(numero1);
	}

	if (numero2 == "") {
		numero2 = 0;
	} else {
		numero2 = parseInt(numero2);
	}

	
	console.log(typeof(numero2));
	var total = numero1 + numero2;
 	console.log(total);

 	document.getElementById("resultado").innerHTML = "Resultado: "+ total;
 	 
}