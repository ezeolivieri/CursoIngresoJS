// Olivieri Ezequiel

// Ejercicio 10
/* Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */

function mostrar()
{

	// Definicion de variables
	var notaRandom;

	// Asignacion de valores
	notaRandom = Math.floor(Math.random() * 10)+1;

	// Logica y muestreo de datos
	if ( notaRandom < 4 ) {
		alert("Vamos, la proxima se puede");
	} 
	else
	{
		if ( notaRandom >= 9 ) {
			alert("EXCELENTE");
		} 
		else
		{
			alert("APROBÓ");
		} 
	}

}