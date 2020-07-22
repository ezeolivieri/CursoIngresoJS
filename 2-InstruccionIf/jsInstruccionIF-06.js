// Olivieri Ezequiel

// Ejercicio 6
/* Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años). */

function mostrar()
{
	
	// Definicion de variables
	var edadIngresada;

	// Asignacion de valores
	edadIngresada = document.getElementById('txtIdEdad').value;

	// Parseo a Entero
	edadIngresada = parseInt(edadIngresada);

	// Condicion esNiño
	if ( edadIngresada < 13 ) {
		alert ("Niño");
	}
	else
	{
		// Condicion esMayorDeEdad
		if ( edadIngresada > 17 )
		{
			alert("Mayor de edad");
		} 
		else 
		{
			// Condicion esAdolescente
			alert("Adolescente");
		}
	}

}