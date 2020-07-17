/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	// Definicion de variables
	var nroUno;
	var nroDos;
	var resultado;

	// Asignacion de valores
	nroUno=document.getElementById('txtIdNumeroUno').value;
	nroDos=document.getElementById('txtIdNumeroDos').value;

	// Parseo a Entero
	nroUno = parseInt(nroUno);
	nroDos = parseInt(nroDos);

	// Realizo calculo
	resultado = nroUno + nroDos;

	// Muestreo de datos
	alert("La suma da como resultado: "+resultado);

}

function restar()
{
	
	// Definicion de variables
	var nroUno;
	var nroDos;
	var resultado;

	// Asignacion de valores
	nroUno=document.getElementById('txtIdNumeroUno').value;
	nroDos=document.getElementById('txtIdNumeroDos').value;

	// Parseo a Entero
	nroUno = parseInt(nroUno);
	nroDos = parseInt(nroDos);

	// Realizo calculo
	resultado = nroUno - nroDos;

	// Muestreo de datos
	alert("La resta da como resultado: "+resultado);

}

function multiplicar()
{ 

	// Definicion de variables
	var nroUno;
	var nroDos;
	var resultado;

	// Asignacion de valores
	nroUno=document.getElementById('txtIdNumeroUno').value;
	nroDos=document.getElementById('txtIdNumeroDos').value;

	// Parseo a Entero
	nroUno = parseInt(nroUno);
	nroDos = parseInt(nroDos);

	// Realizo calculo
	resultado = nroUno * nroDos;

	// Muestreo de datos
	alert("La multiplicacion da como resultado: "+resultado);

}

function dividir()
{
	
	// Definicion de variables
	var nroUno;
	var nroDos;
	var resultado;
	
	// Asignacion de valores
	nroUno=document.getElementById('txtIdNumeroUno').value;
	nroDos=document.getElementById('txtIdNumeroDos').value;
	
	// Parseo a Entero
	nroUno = parseInt(nroUno);
	nroDos = parseInt(nroDos);

	// Realizo calculo
	resultado = nroUno / nroDos;

	// Muestreo de datos
	alert("La division da como resultado: "+resultado);

}

