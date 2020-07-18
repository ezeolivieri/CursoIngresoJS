// Olivieri Ezequiel

/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

function FahrenheitCentigrados () 
{

     // Definicion de variables
     var temperatura;
     var puntoDeCongelamiento;
     var equivalenteEnCentigrados;
     var centigrados;

     // Asignacion de valores
     temperatura = document.getElementById('txtIdTemperatura').value;
     puntoDeCongelamiento = 32;
     equivalenteEnCentigrados = 5/9;

     // Parseo a Entero
     temperatura = parseInt(temperatura);

     // Calculos
     centigrados = temperatura - puntoDeCongelamiento;
     centigrados = centigrados * equivalenteEnCentigrados;

     // Muestreo de datos
     alert( temperatura+" Fahrenheit son "+centigrados+" centígrados" );
	
}

function CentigradosFahrenheit () 
{

     // Definicion de variables
     var temperatura;
     var puntoDeCongelamiento;
     var equivalenteEnFahrenheit;
     var fahrenheit;

     // Asignacion de valores
     temperatura = document.getElementById('txtIdTemperatura').value;
     equivalenteEnFahrenheit = 9/5;
     puntoDeCongelamiento = 32;

     // Parseo a Entero
     temperatura = parseInt(temperatura);

     // Calculos
     fahrenheit = temperatura * equivalenteEnFahrenheit;
     fahrenheit = fahrenheit + puntoDeCongelamiento;

     // Muestreo de datos
     alert( temperatura+" centígrados son "+fahrenheit+" Fahrenheit" );
	
}
