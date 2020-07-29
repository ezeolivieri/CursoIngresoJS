// Olivieri Ezequiel
// Ejercicio 7

function mostrar()
{

	// Defino variables
	var destinoIngresado; 
	
	// Asigno valores
	destinoIngresado = document.getElementById('txtIdDestino').value;

	// Switcheo los casos
	switch (destinoIngresado) {
		case "Cataratas":
			alert(destinoIngresado + " está al Norte.");
			break;
		case "Cordoba":
			alert(destinoIngresado + " está al Oeste.");
			break;
		case "Mar del plata":
			alert(destinoIngresado + " está al Este.");
			break;
		case "Bariloche":
			alert(destinoIngresado + " está al Sur.");
			break;
	}

}