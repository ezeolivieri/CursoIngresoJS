// Olivieri Ezequiel
// Ejercicio 10

/* una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche */

function mostrar()
{

	// Definicion de variables
	var estacionIngresada;
	var destinoIngresado;
	var muestreoDeDatos;

     // Asignacion de valores
     estacionIngresada = document.getElementById('txtIdEstacion').value;
     destinoIngresado = document.getElementById('txtIdDestino').value;
	
	// LOGICA PARA INFORMAR
	switch (estacionIngresada) {
		// Casos para Invierno
		case "Invierno":
			switch (destinoIngresado) {
				case "Bariloche":
					muestreoDeDatos = "Se viaja";
					break;
				default :
					muestreoDeDatos = "No se viaja";
					break;
			}
			break;

		// Casos para Verano
		case "Verano":
			switch (destinoIngresado) {
				case "Cataratas":
				case "Mar del plata":
					muestreoDeDatos = "Se viaja";
					break;
				default:
					muestreoDeDatos = "No se viaja";
					break;
			}
			break;			

		// Caso para Otoño
		case "Otoño":
			muestreoDeDatos = "Se viaja";
			break;

		// Casos para Primavera
		case "Primavera":
			switch (destinoIngresado) {
				case "Bariloche":
					muestreoDeDatos = "No se viaja";
					break;
				default:
					muestreoDeDatos = "Se viaja";
					break;
			}
			break;
	}
	
	// MUESTREO DE DATOS
     alert(muestreoDeDatos);

}