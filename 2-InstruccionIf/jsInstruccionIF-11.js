// Olivieri Ezequiel

// Ejercicio Agregado (IF)
/*
    Se pide ingresar una edad y un estado cicvil
	1- a todos los mayores de edad, mostrar el mensaje "se responsable"
	2- a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
	3- a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	4- a los niños tambien informar "hagan la tarea" 
	5- a los adolescentes casado o Divorciado " sos muy joven para no ser soltero"
	6- a los mayores de edad solteros, tambien informar "a vivir la vida"
	7- a los mayores de edad casados , tambien informar "a disfrutar la pareja"
	8-a los divorciados informar tambien "a intentarlo nuevamente"

    la menor cantidad de if 
    no repetir los alert o los mensajes 
*/

function mostrar()
{
	
	// Definicion de variables
	var edadIngresada;
	var estadoCivil;

	// Asignacion de valores
	edadIngresada = document.getElementById('txtIdEdad').value;
	estadoCivil = document.getElementById('estadoCivil').value;

	// Parseo a Entero
	edadIngresada = parseInt(edadIngresada);

	// Aplicacion de logica y muestreo de datos
	
	// Condiciones para menores de edad(-18)
	if( edadIngresada < 18 ) 
	{
		alert("respeta a tus mayores");
		// Condicion para niños
		if ( edadIngresada <= 12 )
		{
			alert("hagan la tarea");
		}
		else
		{
			// Alert para adolescentes (entre 13 y 17) Casados
			if ( estadoCivil != "Soltero" )
			{
				alert("sos muy joven para no ser soltero");
			}
		}
	} 
	else
	{
		// Alerts para mayores de edad(+18)
		alert("se responsable");
		// Condiciones segun estadoCivil
		if ( estadoCivil == "Soltero" ) 
		{
			// mayorDeEdad && Soltero
			alert("a vivir la vida");
		} 
		else
		{
			if (estadoCivil == "Casado")
			{
				// mayorDeEdad && Casado
				alert("a disfrutar la pareja");
			} 
			else
			{
				// mayorDeEdad && Divorciado
				alert("a intentarlo nuevamente");
			} 
		}
		// Persona de riesgo
		if (edadIngresada >= 60)  
		{
			alert("sos persona de riesgo");
		}
	}

}