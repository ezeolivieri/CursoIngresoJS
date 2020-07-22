function mostrar()
{
	 
	// Defino variable
	var edadIngresada;

	// Asigno valor
	edadIngresada = document.getElementById('txtIdEdad').value;

	// Parseo a Entero
	edadIngresada = parseInt(edadIngresada);

	// Defino la condicion
	if ( edadIngresada > 17 )
	{
		// Muestreo de datos
		alert("Sos mayor de edad");
	}

}