// Olivieri Ezequiel
// Ejercicio 1

function mostrar()
{

	// Defino variables
	var mesSeleccionado;

	// Asigno valores
	mesSeleccionado =document.getElementById('txtIdMes').value;
	
	// Switcheo por casos
	switch (mesSeleccionado) {
		case "Enero":
			alert("Que comiences bien el año!!!");
			break;

		case "Marzo":
			alert("A clases!!!!!!!!!!");
			break;

		case "Julio":
			alert("Se vienen las vacaciones!!!");
			break;

		case "Diciembre":
			alert("Felices fiestas!!!");
			break;
		default:
			alert("Mes: " + mesSeleccionado);
			break;
	}

}