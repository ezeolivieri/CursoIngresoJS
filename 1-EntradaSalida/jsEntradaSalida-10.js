/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

function mostrarAumento()
{

	// Definicion de variables
	var importe;
	var descuento;
	var importeConDescuento;

	// Asignacion de variables
	importe = document.getElementById('txtIdImporte').value;
	descuento = 25;

	// Parseo a Entero
	importe = parseInt(importe);

	// Consigo el porcentaje
	descuento = descuento / 100;

	// Calculo el porcentaje
	descuento = importe * descuento;

	// Aplico el descuento
	importeConDescuento = importe - descuento;

	// Muestreo de datos
	txtIdResultado.value = importeConDescuento;

}
