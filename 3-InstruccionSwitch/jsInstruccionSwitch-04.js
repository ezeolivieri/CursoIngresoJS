// Olivieri Ezequiel
// Ejercicio 4

function mostrar()
{
	
	// Defino variables
	var mesSeleccionado;

	// Asigno valores
	mesSeleccionado = document.getElementById('txtIdMes').value;
	
	// Switcheo los casos
	switch (mesSeleccionado) {
		case "Febrero":
			alert(mesSeleccionado + " a veces tiene 28 dias, y a veces tiene 29 dias.");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert(mesSeleccionado + " tiene 30 dias");
			break;
		default:
			alert(mesSeleccionado + " tiene 31 dias");
			break;
	}
	
}