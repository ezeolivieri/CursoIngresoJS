// Olivieri Ezequiel
// Ejercicio 7

/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/

function mostrar()
{

	// Defino variables
	var contador;
	var acumulador;
	var respuesta;
	var nroIngresado;

	// Asigno valores iniciales
	contador=0;
	acumulador=0;
	respuesta='si';

	// Iterador
	while (respuesta != "no") {
		
		// Pido, parseo y acumulo el nroIngresado
		nroIngresado = prompt("Ingrese un numero");
		nroIngresado = parseInt(nroIngresado);
		acumulador += nroIngresado;

		// Actualizamos contador
		contador++;

		// Pregunto si quiere seguir
		respuesta = prompt(" Desea continuar? Escriba si para continuar o no para terminar. ");

	}

	// Muestreo de datos
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}