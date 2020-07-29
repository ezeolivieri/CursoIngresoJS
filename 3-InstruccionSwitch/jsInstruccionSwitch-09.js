// Olivieri Ezequiel
// Ejercicio 9

/* Una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento. */

function mostrar()
{

	// Definicion de variables
	var estacionIngresada;
	var destinoIngresado;
     var precioBaseEstadia;
     var descuentoAumento; // Positivos es aumento y negativos es descuento
	var descuentoAumentoResuelto;
     var valorDescuentoAumento;

     // Asignacion de valores
     estacionIngresada = document.getElementById('txtIdEstacion').value;
     destinoIngresado = document.getElementById('txtIdDestino').value;
     precioBaseEstadia = 15000;
	
	// LOGICA PARA ASIGNAR DESCUENTO
	switch (estacionIngresada) {
		// Casos para Invierno
		case "Invierno":
			switch (destinoIngresado) {
				case "Bariloche":
					descuentoAumento = 20;
					break;
				case "Cataratas":
				case "Cordoba":
					descuentoAumento = -10;
					break;
				case "Mar del plata":
					descuentoAumento = -20;
					break;
			}
			break;

		// Casos para Verano
		case "Verano":
			switch (destinoIngresado) {
				case "Bariloche":
					descuentoAumento = -20;
					break;
				case "Cataratas":
				case "Cordoba":
					descuentoAumento = 10;
					break;
				case "Mar del plata":
					descuentoAumento = 20;
					break;
			}
			break;			

		// Casos para Otoño y Primavera
		case "Otoño":
		case "Primavera":
			switch (destinoIngresado) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					descuentoAumento = 10;
					break;
				case "Cordoba":
					descuentoAumento = 0;
					break;
			}
			break;
	}

	// CALCULOS FINALES
     // Paso el descuento o el aumento a numero decimal
	descuentoAumentoResuelto = descuentoAumento / 100;

     // Calculo el valor del descuento o aumento a aplicar
	valorDescuentoAumento = descuentoAumentoResuelto * precioBaseEstadia;

     // Aplico descuento o aumento al precioBaseEstadia
	precioTotalConDescuentoAumento = precioBaseEstadia + valorDescuentoAumento;
	
	// MUESTREO DE DATOS
     alert("Para el destino: "+destinoIngresado+", en "+estacionIngresada+", el precio final es: "+precioTotalConDescuentoAumento);

}