// Olivieri Ezequiel
// Ejercicio - Enunciado c) Mixing Banderas

/*
c)”mixing bandera”
de una cantidad de animales indeterminada del zoológico debemos tomar lo siguiente
raza
peso
temperatura media del lugar donde habita
edad
si está en peligro de extinción( si o no)
se debe informar:

1-el promedio de edad total
2-la raza del más pesado
3-la temperatura máxima ingresada de los animales en extinción
*/

function mostrar() 
{

     // Definicion de variables
     var continuar;
     var raza;
     var peso;
     var temperaturaMediaHabitat;
     var edad;
     var estaEnPeligroDeExtincion; //( si o no)
     var sumaDeEdades;
     var cantIngresados;
     var promedioDeEdades;
     var pesoMaximo;
     var razaMasPesado;
     var temperaturaMaxima;
     var tempMaxEnExt;
     var cantEnExtincion;
     
     
     
     // Asignacion de valores iniciales
     continuar = true;
     sumaDeEdades = 0;
     cantIngresados = 0;
     pesoMaximo = 0;
     temperaturaMaxima = 0;
     cantEnExtincion = 0;

     

     // Logica del programa
     while (continuar) 
     {

          // VERIFICACION Y OBTENCION DE DATOS
          raza = prompt("Ingrese la raza");
          while (raza == "") 
          {
               raza = prompt("ERROR: Ingrese la raza");
          }
          peso = prompt("Ingrese el peso");
          peso = parseInt(peso);
          while (isNaN(peso)) 
          {
               peso = prompt("ERROR: Ingrese el peso");
               peso = parseInt(peso);
          }
          temperaturaMediaHabitat = prompt("Ingrese la temperatura media del lugar donde habita");
          temperaturaMediaHabitat = parseInt(temperaturaMediaHabitat);
          while (isNaN(temperaturaMediaHabitat)) 
          {
               temperaturaMediaHabitat = prompt("ERROR: Ingrese la temperatura media del lugar donde habita");
               temperaturaMediaHabitat = parseInt(temperaturaMediaHabitat);
          }
          edad = prompt("Ingrese la edad");
          edad = parseInt(edad);
          while (isNaN(edad)){
               edad = prompt("ERROR: Ingrese una edad valida");
               edad = parseInt(edad);
          }
          estaEnPeligroDeExtincion = prompt("Esta en peligro de extincion? (si o no)");
          while ((estaEnPeligroDeExtincion != "si") && (estaEnPeligroDeExtincion != "no"))
          {
               estaEnPeligroDeExtincion = prompt("ERROR: Esta en peligro de extincion? (si o no)");
          }
          


          // 1-el promedio de edad total
          sumaDeEdades += edad;
          cantIngresados++;

          // 2-la raza del más pesado
          if (cantIngresados == 1)
          {
               razaMasPesado = raza;
               pesoMaximo = peso;
          }
          else
          {
               if (peso > pesoMaximo)
               {
                    razaMasPesado = raza;
                    pesoMaximo = peso;
               }
          }


          // 3-la temperatura máxima ingresada de los animales en extinción
          if (estaEnPeligroDeExtincion == "si")
          {
               cantEnExtincion++;

               if (cantEnExtincion == 1)
               {
                    tempMaxEnExt = temperaturaMediaHabitat;
                    temperaturaMaxima = temperaturaMediaHabitat;
               }
               else
               {
                    if (temperaturaMediaHabitat > tempMaxEnExt)
                    {
                         tempMaxEnExt = temperaturaMediaHabitat;
                         temperaturaMaxima = temperaturaMediaHabitat;
                    }
               }
          }



          // Condicion para continuar
          continuar = confirm("Desea continuar con el ingreso de datos?");
          
     }

     // Promedio total de edades
     promedioDeEdades = sumaDeEdades / cantIngresados;
     
     
     // Muestreo de datos
     document.write("El promedio de edad total: "+promedioDeEdades+"<br>");
     document.write("La raza del más pesado: "+razaMasPesado+"<br>");
     if (cantEnExtincion != 0)
     {
          document.write("La temperatura máxima ingresada de los animales en extinción: "+tempMaxEnExt);
     }
     else
     {
          document.write("No se ingresaron animales en peligro de extinción");
     }
     
}