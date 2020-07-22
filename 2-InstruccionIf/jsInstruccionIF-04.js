function mostrar()
{

	// Defino la variable
	var edadIngresada;

	// Asigno valor
	edadIngresada = document.getElementById('txtIdEdad').value;

	// Parseo a Entero
	edadIngresada = parseInt(edadIngresada);

	// Defino la condicion
	if ( edadIngresada > 12 )
	{
		if ( edadIngresada < 18 )
		{
			alert("Sos adolescente");
		}
	}

}