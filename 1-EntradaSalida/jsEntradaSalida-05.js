/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	// Definición de variables
	var nombreIngresado;
	var edadIngresada;

	// Asignamos los valores de los inputs a las variables
	nombreIngresado = txtIdNombre.value;
	edadIngresada = txtIdEdad.value;

	// Muestreo de datos
	alert("Usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años");
}

