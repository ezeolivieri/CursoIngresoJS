// Olivieri Ezequiel

// Ejercicio 8
/* Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor. */

function mostrar()
{
	
	// Definicion de variables
	var edadIngresada;
	var estadoCivil;

	// Asignacion de valores
	edadIngresada = document.getElementById('txtIdEdad').value;
	estadoCivil = document.getElementById('estadoCivil').value;

	// Parseo a Entero
	edadIngresada = parseInt(edadIngresada);

	// Aplicacion de logica y muestreo de datos
	if ( (edadIngresada >= 18) && (estadoCivil == "Soltero") )
	{
		alert("Es soltero y no es menor");
	}

}