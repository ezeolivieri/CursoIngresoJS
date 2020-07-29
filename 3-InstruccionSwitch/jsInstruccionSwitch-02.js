// Olivieri Ezequiel
// Ejercicio 2

function mostrar()
{

	//Defino variables
	var mesSeleccionado;
	
	// Asigno valores
	mesSeleccionado=document.getElementById('txtIdMes').value;
	
	// Switcheo los casos
	switch (mesSeleccionado) {
		// Despues del Invierno
		case "Diciembre":
		case "Noviembre":
		case "Octubre":
		case "Septiembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
		// Invierno (Julio y Agosto)
		case "Agosto":
		case "Julio":
			alert("Abrigate que hace frio.");
			break;
		// Antes del Invierno
		default:
			alert("Falta para el invierno.");
			break;
	}

}