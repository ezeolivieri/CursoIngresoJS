// Olivieri Ezequiel
// Ejercicio - Enunciado a) Bandera a full

/*
a)”bandera a full”
de una cantidad de espectadores  indeterminada debemos tomar lo siguiente datos
sexo
altura
edad
nombre
se debe informar:

1-el nombre de la más alta de las mujeres
2-el nombre del  más viejo de los hombres 
3-el nombre del primer adolescente ingresado, (solo mostrar si y sólo si  hay  algún adolescente)
*/

function mostrar() 
{

     // Definicion de variables
     var continuar;
     var sexo;
     var altura;
     var edad;
     var nombre;
     var mujIngresadas;
     var nomMujAlta;
     var alturaMax;
     var homIngresados;
     var nomHomViejo;
     var edadMax;
     var primerAdolescente;
     var cantAdolescentesIngresados;
     
     
     // Asignacion de valores iniciales
     continuar = true;
     mujIngresadas = 0;
     alturaMax = 0;
     homIngresados = 0;
     edadMax = 0;
     cantAdolescentesIngresados = 0;



     // Logica del programa
     while (continuar) 
     {

          // VERIFICACION Y OBTENCION DE DATOS
          sexo = prompt("Ingrese el sexo (f-femenino o m-masculino)");
          while ((sexo!="f") && (sexo!="m")){
               sexo = prompt("ERROR: Ingrese el sexo (f-femenino o m-masculino)");
          }
          altura = prompt("Ingrese la altura");
          altura = parseInt(altura);
          while (((altura < 110) || (altura > 210)) || isNaN(altura)){
               altura = prompt("ERROR: Ingrese una altura valida");
               altura = parseInt(altura);
          }
          edad = prompt("Ingrese la edad");
          edad = parseInt(edad);
          while (((edad < 0) || (edad > 120)) || isNaN(edad)){
               edad = prompt("ERROR: Ingrese una edad valida");
               edad = parseInt(edad);
          }
          nombre = prompt("Ingrese el nombre");
          while (nombre == ""){
               nombre = prompt("ERROR: Ingrese un nombre");
          }


          // Switcheo por sexo
          switch(sexo)
          {

               case "f":
                    mujIngresadas++;
                    if (mujIngresadas == 1)
                    {
                         nomMujAlta = nombre;
                         alturaMax = altura;
                    } 
                    else
                    {
                         if (altura > alturaMax)
                         {
                              nomMujAlta = nombre;
                              alturaMax = altura;
                         }
                    }
                    break;

               case "m":
                    homIngresados++;
                    if (homIngresados == 1)
                    {
                         nomHomViejo = nombre;
                         edadMax = edad;
                    }
                    else
                    {
                         if (edad > edadMax)
                         {
                              nomHomViejo = nombre;
                              edadMax = edad;
                         }
                    }
                    break;

          }


          // Busco al primer adolescente
          if ((edad > 12) && (edad < 18))
          {
               // Actualizo contador de ingresados
               cantAdolescentesIngresados++;
               if (cantAdolescentesIngresados == 1)
               {
                    primerAdolescente = nombre;
               }
          }



          // Condicion para continuar
          continuar = confirm("Desea continuar?");

     }


     // Muestreo de datos
     document.write("El nombre de la más alta de las mujeres: "+nomMujAlta+"<br>");
     document.write("El nombre del  más viejo de los hombres: "+nomHomViejo+"<br>");
     if (cantAdolescentesIngresados != 0) {
          document.write("El nombre del primer adolescente ingresado: "+primerAdolescente);
     }

}