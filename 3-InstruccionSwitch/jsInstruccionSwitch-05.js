// Olivieri Ezequiel
// Ejercicio 5

function mostrar()
{

	//Defino variables
	var horaDelDia; 
	
	// Asigno valores 
	horaDelDia = document.getElementById('txtIdHora').value;

	// Parseo a Entero
	horaDelDia = parseInt(horaDelDia);

	// Switcheo los casos
	switch (horaDelDia) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana!");
			break;
	}

}