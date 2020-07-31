// Olivieri Ezequiel
// Ejercicio 1

/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/

function mostrar()
{

	// Definicion de variables
	var contador;
	var acumulador;

	// Asignacion de valores iniciales
	contador = 0;
	acumulador = 0;

	// Iteracion While
	while (contador < 10) {
		contador++;
		acumulador += 1;
		console.log(acumulador);
	}
	
}