/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

     // Definicion de variables
     var largoTerreno;
     var anchoTerreno;
     var perimetro;
     var cantidadAlambre;

     // Asignacion de valores
     largoTerreno = document.getElementById('txtIdLargo').value;
     anchoTerreno = document.getElementById('txtIdAncho').value;

     // Parseo a Entero
     largoTerreno = parseInt(largoTerreno);
     anchoTerreno = parseInt(anchoTerreno);

     // Calculo
     perimetro = (largoTerreno * 2) + (anchoTerreno * 2);
     cantidadAlambre = perimetro * 3;

     // Muestreo de datos
     alert("Se debe comprar en total "+ cantidadAlambre +" de alambre");

}
function Circulo () 
{

     // Definicion de variables
     var radioTerreno;
     var diametro;
     var pi;
     var perimetro;
     var cantidadAlambre;

     // Asignacion de valores
     radioTerreno = document.getElementById('txtIdRadio').value;
     pi = 3.14;

     // Parseo a entero
     radioTerreno = parseInt(radioTerreno);

     // Calculo
     diametro = radioTerreno * 2;
     perimetro = diametro * pi;
     cantidadAlambre = perimetro * 3;

     // Muestreo de datos
     alert("Se debe comprar en total "+cantidadAlambre+" de alambre");
	
}
function Materiales () 
{

     // Definicion de variables
     var largoTerreno;
     var anchoTerreno;
     var perimetro;
     var cantidadLados;
     var medidaDeLados;
     var bolsasDeCemento;
     var bolsasDeCal;

     // Asignacion de valores
     largoTerreno = document.getElementById('txtIdLargo').value;
     anchoTerreno = document.getElementById('txtIdAncho').value;
     bolsasDeCemento = 2;
     bolsasDeCal = 3;
     cantidadLados = 4;

     // Parseo a Entero
     largoTerreno = parseInt(largoTerreno);
     anchoTerreno = parseInt(anchoTerreno);

     // Calculo
     perimetro = (largoTerreno * 2) + (anchoTerreno * 2);
     medidaDeLados = perimetro / cantidadLados;
     bolsasDeCemento = bolsasDeCemento * medidaDeLados;
     bolsasDeCal = bolsasDeCal * medidaDeLados;

     // Muestreo de datos
     alert("Se deben comprar "+bolsasDeCemento+" bolsas de cemento y "+bolsasDeCal+" de cal");
	
}