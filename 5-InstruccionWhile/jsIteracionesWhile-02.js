// Olivieri Ezequiel
// Ejercicio 2

/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/

function mostrar()
{

	// Definicion de variables
	var contador;
	var acumulador;

	// Asignacion de valores iniciales
	contador= 0;
	acumulador= 11;
	
	// Iteraciones while
	while (contador < 10) {
		contador++;
		acumulador -= 1;
		console.log(acumulador);
	}	

}