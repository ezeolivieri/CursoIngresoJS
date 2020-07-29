// Olivieri Ezequiel
// Ejercicio 8

function mostrar()
{

	// Defino variables
	var destinoIngresado; 
	
	// Asigno valores
	destinoIngresado = document.getElementById('txtIdDestino').value;

	// Switcheo los casos
	switch (destinoIngresado) {
		case "Ushuaia":
		case "Bariloche":
			alert("FRIO");
			break;
		default:
			alert("CALOR");
			break;
	}

}