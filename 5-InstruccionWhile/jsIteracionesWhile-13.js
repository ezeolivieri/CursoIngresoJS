// Olivieri Ezequiel
// Ejercicio - Enunciado b) SinBanderas

/*
b)”sin banderas”
Se debe ingresar 10:
nombre
edad(0 y 115)
altura(30 y 230)
sexo
Dinero(puede ser positivo o negativo, pero debe ser un número)
CantidadDeHijos(0 y 10)
se debe informar:

1- nombre de la persona con edad más vieja
2- promedio de altura de las mujeres
3- nombre de la mujer más joven
*/

function mostrar() 
{

     // Definicion de variables
     var contador;
     var nombre;
     var edad; //(0 y 115)
     var altura; //(30 y 230)
     var sexo;
     var dinero; //(puede ser positivo o negativo, pero debe ser un número)
     var cantidadDeHijos; //(0 y 10)
     var nomPersMasVieja;
     var edadMaxima;
     var nomMujMasJoven;
     var edadMinima;
     var promedioAlturaMujeres;
     var alturaMujeres;
     var cantMujeresIngresadas;
     
     
     // Asignacion de valores iniciales
     contador = 0;
     edadMaxima = 0;
     edadMinima = 0;
     promedioAlturaMujeres = 0;
     alturaMujeres = 0;
     cantMujeresIngresadas = 0;



     // Logica del programa
     while (contador < 10) 
     {

          // Actualizo contador
          contador++;


          // VERIFICACION Y OBTENCION DE DATOS
          nombre = prompt("Ingrese el nombre");
          while (nombre == ""){
               nombre = prompt("ERROR: Ingrese un nombre");
          }
          edad = prompt("Ingrese la edad");
          edad = parseInt(edad);
          while (((edad < 0) || (edad > 115)) || isNaN(edad)){
               edad = prompt("ERROR: Ingrese una edad valida");
               edad = parseInt(edad);
          }
          altura = prompt("Ingrese la altura");
          altura = parseInt(altura);
          while (((altura < 30) || (altura > 230)) || isNaN(altura)){
               altura = prompt("ERROR: Ingrese una altura valida");
               altura = parseInt(altura);
          }
          sexo = prompt("Ingrese el sexo (f-femenino o m-masculino)");
          while ((sexo!="f") && (sexo!="m")){
               sexo = prompt("ERROR: Ingrese el sexo (f-femenino o m-masculino)");
          }
          dinero = prompt("Ingrese la dinero");
          dinero = parseInt(dinero);
          while (isNaN(dinero)){
               dinero = prompt("ERROR: Ingrese un dinero valido");
               dinero = parseInt(dinero);
          }
          cantidadDeHijos = prompt("Ingrese la cantidadDeHijos");
          cantidadDeHijos = parseInt(cantidadDeHijos);
          while (((cantidadDeHijos < 0) || (cantidadDeHijos > 10)) || isNaN(cantidadDeHijos)){
               cantidadDeHijos = prompt("ERROR: Ingrese una cantidadDeHijos valida");
               cantidadDeHijos = parseInt(cantidadDeHijos);
          }



          // 1- nombre de la persona con edad más vieja
          if (contador == 1) {
               nomPersMasVieja = nombre;
               edadMaxima = edad;
          } 
          else
          {
               if (edad > edadMaxima)
               {
                    nomPersMasVieja = nombre;
                    edadMaxima = edad;
               }
          }


          if (sexo == "f")
          {
               cantMujeresIngresadas++;
               alturaMujeres += altura;
               
               // 3- nombre de la mujer más joven
               if (cantMujeresIngresadas == 1)
               {
                    nomMujMasJoven = nombre;
                    edadMinima = edad;
               }
               else
               {
                    if (edad < edadMinima)
                    {
                         nomMujMasJoven = nombre;
                         edadMinima = edad;
                    }
               }
          }
          
          
     }
     

     // 2- promedio de altura de las mujeres
     promedioAlturaMujeres = alturaMujeres / cantMujeresIngresadas;
     
     
     // Muestreo de datos
     document.write("El nombre de la persona con edad más vieja: "+nomPersMasVieja+"<br>");
     document.write("El promedio de altura de las mujeres: "+promedioAlturaMujeres+"<br>");
     document.write("El nombre de la mujer más joven: "+nomMujMasJoven);
     
}