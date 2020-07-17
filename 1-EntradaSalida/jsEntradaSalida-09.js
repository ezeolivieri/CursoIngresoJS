/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	// Definición de variables
	var sueldo;
	var aumento;
	var sueldoConAumento;

	// Asignacion de valores
	sueldo = document.getElementById('txtIdSueldo').value;
	aumento = 10;

	// Parseo a Entero del sueldo
	sueldo = parseInt(sueldo);

	// Calculo el porcentaje
	aumento = aumento / 100;

	// Calculo el aumento
	aumento = sueldo * aumento;

	// Aplico el aumento
	sueldoConAumento = sueldo + aumento;

	// Muestreo de datos
	txtIdResultado.value = sueldoConAumento;

}
