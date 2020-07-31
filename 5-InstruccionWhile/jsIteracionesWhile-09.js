// Olivieri Ezequiel
// Ejercicio 9

/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

function mostrar()
{	
	
	// Defino variables
	var contador;
	var nroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	// Asigno valores iniciales
	contador=0;
	respuesta='si';

	// Iterador
	while(respuesta=="si")
	{

		contador++;
	
		// Pido, parseo y acumulo el nroIngresado
		nroIngresado = prompt("Ingrese un numero");
		nroIngresado = parseInt(nroIngresado);

		// Inicializo los numeros maximos y minimos
		if(contador == 1)
		{
			numeroMaximo = nroIngresado;
			numeroMinimo = nroIngresado;
		}
		else
		{
			// Luego de el primer ingreso
			// Analizo los valores maximos y minimos
			if (nroIngresado > numeroMaximo)
			{
				numeroMaximo = nroIngresado;
			};
			if (nroIngresado < numeroMinimo)
			{
				numeroMinimo = nroIngresado;
			};
		};

		// Condicion para continuar
		respuesta=prompt("Desea continuar? si para continuar, no para salir.");

	}

	// Muestreo de datos
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;

}