/*
Agregado while

Ingrese una edad(0 y 120), nombre y un sexo(f o m)
informar:

*/

function mostrar() 
{

     // Definicion de variables
     // Nivel 1
     var continuar;
     var bandera;
     var edadIngresada;
     var nombreIngresado;
     var sexoIngresado;
     var totalIngresados;
     var etapaDeVida;
     var cantMayores;
     var cantAdolescentes;
     var cantMenores;
     var edadMaxima;
     var edadMinima;
     // Nivel 2
     var cantMujeres;
     var cantHombres;
     var cantMujAdol;
     var cantNiñHom;
     var cantEdadesPares;
     var sumaEdades;
     var promedioEdad;
     var sumaEdadesHom;
     var promedioEdadHom;
     var sumaEdadesMuj;
     var promedioEdadMuj;
     // Nivel 3
     var nomEdadMaxima;
     var nomEdadMinima;
     var sexEdadMaxima;
     var sexEdadMinima;
     // Nivel Dios
     var cantPersEdadMinima;
     var cantPersEdadMaxima;
     var nomUltPersMaxEdad;
     var nomUltPersMinEdad;


     // Asignacion de valores iniciales
     continuar = true;
     bandera = 0;
     totalIngresados = 0;
     sumaEdades = 0;
     sumaEdadesHom = 0;
     sumaEdadesMuj = 0;
     cantPersEdadMinima = 0;
     cantPersEdadMaxima = 0;
     cantAdolescentes = 0;
     cantEdadesPares = 0;
     cantHombres = 0;
     cantMayores = 0;
     cantMenores = 0;
     cantMujAdol = 0;
     cantMujeres = 0;
     cantNiñHom = 0;

     // Logica del programa
     while (continuar) {

          // Actualizo bandera
          bandera++;


          // Pido nombre
          nombreIngresado = prompt("Ingrese el nombre");
          // Pido sexo y verifico que sea valido
          sexoIngresado = prompt("Ingrese su sexo (f o m)");
          while ((sexoIngresado != "f") && (sexoIngresado != "m"))
          {
               sexoIngresado = prompt("ERROR! Ingrese un sexo valido(f o m)");
          }
          // Pido edad, parseo a Entero y verifico que sea real
          edadIngresada = prompt("Ingrese la edad");
          edadIngresada = parseInt(edadIngresada);
          while ((edadIngresada < 0) || (edadIngresada > 120)) 
          {
               edadIngresada = prompt("ERROR! Ingrese una edad valida");
          }



          // Defino etapaDeVida segun edadIngresada
          if ( (edadIngresada > 12) &&
               (edadIngresada < 18) ) {
               etapaDeVida = "adolescente";
          }
          else
          {
               if (edadIngresada >= 18) {
                    etapaDeVida = "mayor";
               } 
               else 
               {
                    etapaDeVida = "menor";
               }
          }


          // Switcheo segun etapaDeVida
          switch (etapaDeVida) {
               case "adolescente":
                    cantAdolescentes++;
                    if (sexoIngresado == "f") {
                         cantMujAdol++;
                    }
                    break;
          
               case "menor":
                    cantMenores++;
                    if (sexoIngresado == "m") {
                         cantNiñHom++;
                    }
                    break;

               case "mayor":
                    cantMayores++;
                    break;
          }


          // Inicializo las edades maximas y minimas
		if(bandera == 1)
		{
			edadMaxima = edadIngresada;
               edadMinima = edadIngresada;
               nomEdadMaxima = nombreIngresado;
               sexEdadMaxima = sexoIngresado;
               nomEdadMinima = nombreIngresado;
               sexEdadMinima = sexoIngresado;
               cantPersEdadMinima++;
               cantPersEdadMaxima++;
		}
		else
		{
			// Luego de el primer ingreso
			// Analizo las edades maximas y minimas
			if (edadIngresada > edadMaxima)
			{
                    edadMaxima = edadIngresada;
                    nomEdadMaxima = nombreIngresado;
                    sexEdadMaxima = sexoIngresado;
                    cantPersEdadMaxima++;
			}
			if (edadIngresada < edadMinima)
			{
                    edadMinima = edadIngresada;
                    nomEdadMinima = nombreIngresado;
                    sexEdadMinima = sexoIngresado;
                    cantPersEdadMinima++;
			}
          }
          

          // Cuento la cantidad de mujeres y hombres
          if (sexoIngresado == "f")
          {
               cantMujeres++;
               sumaEdadesMuj += edadIngresada;
          } 
          else 
          {
               if(sexoIngresado == "m")
               {
                    cantHombres++;
                    sumaEdadesHom += edadIngresada;
               }
          }


          // Cuento la cantidad de edades pares
          if ((edadIngresada % 2) == 0) {
               cantEdadesPares++;
          }

          
          // Actualizo contadores
          totalIngresados++;
          
          // Actualizo valor para luego sacar promedio
          sumaEdades+= edadIngresada;
          
          // Condicion para continuar ingresando
          continuar = confirm("Desea continuar?");

     }

     // Calculo promedio de edades
     promedioEdad = sumaEdades / totalIngresados;
     promedioEdadHom = sumaEdadesHom / cantHombres;
     promedioEdadMuj = sumaEdadesMuj / cantMujeres;



     // Muestreo de datos

     // Nivel 1
     document.write("Total ingresados: "+totalIngresados+"<br>");
     document.write("Cantidad de mayores de edad: "+cantMayores+"<br>");
     document.write("Cantidad de menores de edad: "+cantMenores+"<br>");
     document.write("Cantidad de adolescentes: "+cantAdolescentes+"<br>");
     document.write("Mayor edad ingresada: "+edadMaxima+"<br>");
     document.write("Menor edad ingresada: "+edadMinima+"<br>"); 

     // Nivel 2
     document.write("Cantidad de mujeres: "+cantMujeres+"<br>");
     document.write("Cantidad de hombres: "+cantHombres+"<br>");
     document.write("Cantidad de mujeres adolescentes: "+cantMujAdol+"<br>");
     document.write("Cantidad de niños hombres: "+cantNiñHom+"<br>");
     document.write("Promedio de edad: "+promedioEdad+"<br>");
     document.write("Promedio de edad de las mujeres: "+promedioEdadMuj+"<br>");
     document.write("Promedio de edad de los hombres: "+promedioEdadHom+"<br>");
     document.write("Cantidad de edades pares: "+cantEdadesPares+"<br>");

     // Nivel 3
     document.write("Nombre de la persona mas vieja: "+nomEdadMaxima+"<br>");
     document.write("Nombre de la persona mas joven: "+nomEdadMinima+"<br>");
     document.write("Sexo de la persona mas vieja: "+sexEdadMaxima+"<br>");
     document.write("Sexo de la persona mas joven: "+sexEdadMinima+"<br>");

     // Nivel Dios
     document.write("Cantidad de personas con edad maxima: "+cantPersEdadMaxima+"<br>");
     document.write("Cantidad de personas con edad minima: "+cantPersEdadMinima+"<br>");
     document.write("Nombre de la ultima persona con la mayor edad encontrada: "+nomUltPersMaxEdad+"<br>");
     document.write("Nombre de la ultima persona con la menor edad encontrada: "+nomUltPersMinEdad+"<br>");


}