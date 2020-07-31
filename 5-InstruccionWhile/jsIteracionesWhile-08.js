// Olivieri Ezequiel
// Ejercicio 8

/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

function mostrar()
{

	// Defino variables
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var nroIngresado;

	// Asigno valores iniciales
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	// Iterador
	while (respuesta != 'no') {
		
		// Pido, parseo y acumulo el nroIngresado
		nroIngresado = prompt("Ingrese un numero");
		nroIngresado = parseInt(nroIngresado);

		// Condicion para numero positivo o negativo
		if (nroIngresado > 0) {
			sumaPositivos += nroIngresado;
		} else {
			multiplicacionNegativos *= nroIngresado;
		}

		// Actualizamos contador
		contador++;

		// Pregunto si quiere seguir
		respuesta = prompt(" Desea continuar? Escriba si para continuar o no para terminar. ");

	}

	// Muestreo de datos
	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}