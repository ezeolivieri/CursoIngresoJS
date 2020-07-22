function mostrar()
{
	
	// Defino variable 
	var edadIngresada;

	// Asigno valor
	edadIngresada = document.getElementById('txtIdEdad').value

	// Parseo a Entero
	edadIngresada = parseInt(edadIngresada);

	// Defino la condición
	if (edadIngresada == 15) {
		alert("Niñx bonitx");
	}

}