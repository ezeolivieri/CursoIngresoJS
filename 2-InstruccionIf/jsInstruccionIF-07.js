// Olivieri Ezequiel

// Ejercicio 7
/* Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' */

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
	if ( (edadIngresada < 18) && (estadoCivil != "Soltero") )
	{
		alert("Es muy pequeño para NO ser soltero.");
	}

}