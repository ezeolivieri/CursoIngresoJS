// Olivieri Ezequiel
// Ejercicio 5

function mostrar()
{

	// Defino la variable
	var edadIngresada;

	// Asigno valor
	edadIngresada = document.getElementById('txtIdEdad').value;

	// Parseo a Entero
	edadIngresada = parseInt(edadIngresada);

	// Defino la condicion
	if ( edadIngresada < 13 )
	{
		// Muestreo de datos
	    alert("NO sos adolescente");
	}
	
	if ( edadIngresada > 17 )
	{		
	    // Muestreo de datos
	    alert("NO sos adolescente");
	}

}