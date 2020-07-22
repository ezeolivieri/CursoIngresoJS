function mostrar()
{
	// Definicion de variable
	var edadIngresada;
	
	// Asigno valor
	edadIngresada = document.getElementById('txtIdEdad').value;

	// Parseo a Entero
	edadIngresada = parseInt(edadIngresada);

	// Defino la condicion
	if ( edadIngresada > 17 ) 
	{
		alert("Mayor de Edad");
	}

	if ( edadIngresada < 18 ) 
	{
		alert("Menor de Edad");
	}

}