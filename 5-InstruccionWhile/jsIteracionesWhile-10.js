// Olivieri Ezequiel
// Ejercicio 10

/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */

function mostrar()
{

	// Declaro contadores y variables
	var respuesta;
	var nroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var cantPositivos;
	var cantNegativos;
	var cantCeros;
	var cantPares;
	var promedioNegativos;
	var promedioPositivos;
	var difEntrePosNeg;
	var tipoNumero;

	// Asigno valores iniciales
	respuesta="si";
	sumaNegativos=0;
	sumaPositivos=0;
	cantCeros=0;
	cantNegativos=0;
	cantPositivos=0;
	cantPares=0;

	// Iterador
	while(respuesta!="no")
	{
		
		// Pido, parseo y acumulo el nroIngresado
		nroIngresado = prompt("Ingrese un numero");
		nroIngresado = parseInt(nroIngresado);

		// Defino el tipo de numero
		if (nroIngresado < 0)
		{
			tipoNumero = "negativo";
		} 
		else
		{
			if (nroIngresado > 0) 
			{
				tipoNumero = "positivo";
			} 
			else
			{
				tipoNumero = "cero"
			}
		}

		// Switcheo por tipoNumero
		switch (tipoNumero) {
			case "positivo":
				sumaPositivos += nroIngresado;
				cantPositivos++;
				// Condicion para numeros pares
				if ((nroIngresado % 2) == 0)
				{
					cantPares++;
				}
				break;

			case "negativo":
				sumaNegativos += nroIngresado;
				cantNegativos++;
				// Condicion para numeros pares
				if ((nroIngresado % 2) == 0)
				{
					cantPares++;
				}
				break;
		
			case "cero":
				cantCeros++;
				break;
		}

		// Condicion para continuar
		respuesta=prompt("desea continuar?");

	}

	// Calculo promedio de positivos y negativos
	promedioNegativos = sumaNegativos / cantNegativos;
	promedioPositivos = sumaPositivos / cantPositivos;

	// Calculo diferencia entre positivos y negativos
	difEntrePosNeg = sumaPositivos - sumaNegativos;

	// Muestreo de datos
	document.writeln("La suma de negativos es: "+sumaNegativos+"<br>");
	document.writeln("La suma de los positivos es: "+sumaPositivos+"<br>");
	document.writeln("La cantidad de positivos es: "+cantPositivos+"<br>");
	document.writeln("La cantidad de negativos es: "+cantNegativos+"<br>");
	document.writeln("La cantidad de ceros es: "+cantCeros+"<br>");
	document.writeln("La cantidad de numeros pares es: "+cantPares+"<br>");
	document.writeln("El promedio de positivos es: "+promedioPositivos+"<br>");
	document.writeln("El promedio de negativos es: "+promedioNegativos+"<br>");
	document.writeln("Diferencia entre positivos y negativos: "+difEntrePosNeg+"<br>");

}