// Olivieri Ezequiel
// Parcial 2020 - Ejercicio 3

/*
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/

function mostrar()
{
	
	// Definicion de variables
	var continuar;
	var contador;
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;
	var nomMasTemp;
	var temperaturaMasAlta;
	var cantMayViu;
	var etapaDeVida;
	var cantHomSolViu;
	var persTerEdadConTemp;
	var promEdadHomSolt;
	var sumaEdadHomSolt;
	var cantEdadHomSolt;


	// Asignacion de valores iniciales
	continuar = true;
	contador = 0;
	cantHomSolViu = 0;
	cantMayViu = 0;
	cantEdadHomSolt = 0;
	promEdadHomSolt = 0;
	sumaEdadHomSolt = 0;


	// Logica del programa
	while (continuar) 
	{

		// Actualizo contador
		contador++;



		// OBTENCION Y VERIFICACION DE DATOS
		// nombre
		nombre = prompt("Ingrese el nombre");
		// edad
		edad = prompt("Ingrese la edad");
		edad = parseInt(edad);
		while ((edad < 0) || (edad > 120))
		{
			edad = prompt("ERROR: Ingrese una edad valida");
		}
		// sexo
		sexo = prompt("Ingrese el sexo (f - femenino / m - masculino)");
		while ((sexo != "f") && (sexo != "m"))
		{
			sexo = prompt("ERROR: Ingrese un sexo valido (f - femenino / m - masculino)");
		}
		// estado civil
		estadoCivil = prompt("Ingrese su estado civil (soltero, casado o viudo)");
		while( (estadoCivil != "soltero") &&
			  (estadoCivil != "casado") &&
			  (estadoCivil != "viudo") )
		{
			estadoCivil = prompt("ERROR: Ingrese un estado civil valido (soltero, casado o viudo)");
		}
		// temperatura
		temperaturaCorporal = prompt("Ingrese su temperatura corporal");
		temperaturaCorporal = parseInt(temperaturaCorporal);



		// Switcheo por estado civil
		switch (estadoCivil) {
			case "soltero":
				if (sexo == "m")
				{
					cantEdadHomSolt++;
					sumaEdadHomSolt += edad;

					cantHomSolViu++;
				}
				break;

			case "casado":

				break;

			case "viudo":
				if (edad > 17) 
				{
					cantMayViu++;
				}
				if (sexo == "m") 
				{
					cantHomSolViu++;
				}
				break;

		}


		// Busco el nombre de la persona que mas temperatura corporal posee
		if (contador == 1) {
			nomMasTemp = nombre;
			temperaturaMasAlta = temperaturaCorporal;
		}
		else
		{
			if (temperaturaCorporal > temperaturaMasAlta)
			{
				nomMasTemp = nombre;
				temperaturaMasAlta = temperaturaCorporal;
			}
		}

		// Calculo cantidad de personas de la tercera edad con +38 de temperatura
		if ( (edad > 60) && (temperaturaCorporal > 38) )
		{
			persTerEdadConTemp++;
		}


		// Condicion para continuar
		continuar = confirm("Desea continuar?");

	}

	// Calculo promedio de edad entre los hombres solteros
	promEdadHomSolt = sumaEdadHomSolt / cantEdadHomSolt;


	// Muestreo de datos
	document.write("Nombre de la persona con mas temperatura: "+nomMasTemp+"<br>");
	document.write("Cantidad de mayores de edad que estan viudos: "+cantMayViu+"<br>");
	document.write("Cantidad de hombres que hay solteros o viudos: "+cantHomSolViu+"<br>");
	document.write("Cantidad de personas de la tercera edad( mas de 60 años) que tienen mas de 38 de temperatura: "+persTerEdadConTemp+"<br>");
	document.write("Promedio de edad entre los hombres solteros: "+promEdadHomSolt);

}
