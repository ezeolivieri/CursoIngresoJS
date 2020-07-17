/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	// Definicion de variables
	var nro1Ingresado;
	var nro2Ingresado;
	var resultado;

	// Asigno valores de inputs
	nro1Ingresado = txtIdNumeroUno.value;
	// Otra forma de obtener los valores de inputs
	nro2Ingresado = document.getElementById('txtIdNumeroDos').value;

	// Parseamos el nro recibido a entero
	nro1Ingresado = parseInt(nro1Ingresado);
	nro2Ingresado = parseInt(nro2Ingresado);

	// Guardamos resultado de la suma
	total =  nro1Ingresado + nro2Ingresado;

	// Mostramos el resultado
	alert("La suma es " + resultado);

}

