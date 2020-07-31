// Olivieri Ezequiel
// Ejercicio 3

/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/

function mostrar()
{

	// Definicion de variables
	var claveIngresada;
	var claveCorrecta;

	// Asignacion de valor inicial
	claveCorrecta = "utn750";

	// Pedimos clave por prompt
	claveIngresada = prompt("ingrese el número clave.");

	while (claveIngresada != claveCorrecta) {
		// Pedimos clave por prompt
		claveIngresada = prompt("ERROR: ingrese el número clave nuevamente.");
	}
	
}
