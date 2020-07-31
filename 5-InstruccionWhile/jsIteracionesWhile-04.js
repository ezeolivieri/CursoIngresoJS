// Olivieri Ezequiel
// Ejercicio 4

/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/

function mostrar()
{
	// Definicion de variable
	var numeroIngresado;
	var muestreoDeDatos;

	// Pedimos por primera vez los datos
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	muestreoDeDatos = document.getElementById('txtIdNumero');

	// Parseo a Entero
	numeroIngresado = parseInt(numeroIngresado);

	while ((numeroIngresado != 0) &&
		  (numeroIngresado != 1) &&
		  (numeroIngresado != 2) &&
		  (numeroIngresado != 3) &&
		  (numeroIngresado != 4) &&
		  (numeroIngresado != 5) &&
		  (numeroIngresado != 6) &&
		  (numeroIngresado != 7) &&
		  (numeroIngresado != 8) &&
		  (numeroIngresado != 9) ) {

		numeroIngresado = prompt("ERROR: ingrese un número entre 0 y 9.");
	}

	muestreoDeDatos.value = numeroIngresado;
	
}