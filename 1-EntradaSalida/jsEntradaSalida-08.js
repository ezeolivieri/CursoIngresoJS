/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	// Definicion de variables
	var dividendo;
	var divisor;
	var resultado;

	// Asignacion de valores
	dividendo = txtIdNumeroUno.value;
	divisor = document.getElementById('txtIdNumeroDos')
	
	// Parseo a Int
	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);

	// Càlculo del resto
	resultado = dividendo % divisor;

	// Muestreo de datos
	alert("El resto es: " + resultado);

}
