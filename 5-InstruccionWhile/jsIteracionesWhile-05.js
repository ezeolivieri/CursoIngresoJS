// Olivieri Ezequiel
// Ejercicio 5

/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/

function mostrar()
{

	// Declaracion de variable
	var sexoIngresado;

	// Pido datos por prompt
	sexoIngresado = prompt("ingrese f ó m .");

	// Itero sobre la condicion
	while ( (sexoIngresado != "f") && 
		   (sexoIngresado != "m") ) {

		sexoIngresado = prompt("ERROR: ingrese f ó m .");

	}

	// Muestreo de datos
	txtIdSexo.value=sexoIngresado;

}