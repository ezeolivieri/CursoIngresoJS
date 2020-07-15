/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	// Definicion de variable
	var nombreIngresado;
	
	// Asignacion
	nombreIngresado= prompt("Ingrese su nombre", "Natalia Natalia");

	// Muestreo de datos
	txtIdNombre.value = nombreIngresado;
}

