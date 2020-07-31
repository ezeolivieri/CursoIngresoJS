// Olivieri Ezequiel
// Ejercicio 6

function mostrar()
{

	// Defino variables
	var contador;
	var acumulador;
	var numeroIngresado;

	// Asigno valores iniciales
	contador=0;
	acumulador=0;

	// Iterador
	while (contador < 5) {
		
		// Pido dato y parseo
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador += numeroIngresado;
		contador++;

	}
	
	// Muestreo de datos
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;

}