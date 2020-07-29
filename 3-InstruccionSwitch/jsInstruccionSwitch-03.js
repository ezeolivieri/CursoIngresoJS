// Olivieri Ezequiel
// Ejercicio 3

function mostrar()
{
	
	// Defino variables
	var mesSeleccionado;

	// Asigno valores
	mesSeleccionado = document.getElementById('txtIdMes').value;
	
	// Switcheo los casos
	switch (mesSeleccionado) {
		case "Febrero":
			alert("Este mes no tiene más de 29 días.");
			break;
		default:
			alert("Este mes tiene 30 o más días");
			break;
	}

}