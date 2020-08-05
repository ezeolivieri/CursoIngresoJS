// Olivieri Ezequiel
// Parcial 2020 - Ejercicio 2

/* 
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro. 
*/

function mostrar()
{

     // Definicion de variables
     var continuar;
     var contador;
     var tipoDeProducto;
     var cantidadBolsas;
     var precioPorBolsa;
     var totalArena;
     var totalCal;
     var totalCemento;
     var totalSinDescuento;
     var cantBolsasArena;
     var cantBolsasCal;
     var cantBolsasCemento;
     var correspondeDescuento;
     var totalConDescuento;
     var tipoProdConMasBolsas;
     var tipoProdMasCaro;
     var porcentajeDescuento;
     var descuento;
     var valorDescuento;
     var precioProdMasCaro;


     // Asignacion de valores iniciales
     continuar = true;
     contador = 0;
     correspondeDescuento = false;
     totalCemento = 0;
     totalCal = 0;
     totalArena = 0;
     cantBolsasArena = 0;
     cantBolsasCal = 0;
     cantBolsasCemento = 0;
     totalBolsas = 0;
     precioProdMasCarom = 0;

     // LOGICA DEL PROGRAMA
     while (continuar) {

          // Actualizo contador
          contador++;

          // Pido tipo de producto para la construccion y lo verifico
          tipoDeProducto = prompt("Ingrese el tipo de producto (arena, cal o cemento)");
          while((tipoDeProducto != "arena") &&
               (tipoDeProducto != "cal") &&
               (tipoDeProducto != "cemento")) 
          {
               tipoDeProducto = prompt("ERROR: Ingrese un tipo de producto valido (arena, cal o cemento)");
          }

          // Pido cantidad de bolsas para la construccion, la parseo y la verifico
          cantidadBolsas = prompt("Ingrese la cantidad de bolsas");
          cantidadBolsas = parseInt(cantidadBolsas);

          // Pido precio por bolsa, lo parseo y lo verifico
          precioPorBolsa = prompt("Ingrese el precio por bolsa");
          precioPorBolsa = parseInt(precioPorBolsa);
          while (precioPorBolsa < 1)
          {
               precioPorBolsa = prompt("ERROR: Ingrese un precio por bolsa valido");
          }


          // Switcheo por tipo de producto
          switch (tipoDeProducto) {
               case "arena":
                    totalArena = cantidadBolsas * precioPorBolsa;
                    cantBolsasArena += cantidadBolsas;
                    if (contador == 1) {
                         tipoProdMasCaro = tipoDeProducto;
                         precioProdMasCaro = totalArena;
                    } 
                    else
                    {
                         if (totalArena > precioProdMasCaro) {
                              tipoProdMasCaro = tipoDeProducto;
                              precioProdMasCaro = totalArena;
                         }
                    }
                    break;

               case "cal":
                    totalCal = cantidadBolsas * precioPorBolsa;
                    cantBolsasCal += cantidadBolsas;
                    if (contador == 1) {
                         tipoProdMasCaro = tipoDeProducto;
                         precioProdMasCaro = totalCal;
                    } 
                    else
                    {
                         if (totalCal > precioProdMasCaro) {
                              tipoProdMasCaro = tipoDeProducto;
                              precioProdMasCaro = totalCal;
                         }
                    }
                    break;

               case "cemento":
                    totalCemento = cantidadBolsas * precioPorBolsa;
                    cantBolsasCemento += cantidadBolsas;
                    if (contador == 1) {
                         tipoProdMasCaro = tipoDeProducto;
                         precioProdMasCaro = totalCemento;
                    } 
                    else
                    {
                         if (totalCemento > precioProdMasCaro) {
                              tipoProdMasCaro = tipoDeProducto;
                              precioProdMasCaro = totalCemento;
                         }
                    }
                    break;

          }
          // Sumo los totales calculados en el switch
          totalSinDescuento = totalArena + totalCal + totalCemento;
          totalBolsas = cantBolsasCemento + cantBolsasCal + cantBolsasArena;


          // Condicion para continuar
          continuar = confirm("Desea continuar?");

     }

     // Condicion por si corresponde descuento
     if (totalBolsas >= 30) {
          correspondeDescuento = true;
          descuento = 25;
     }
     else
     {
          if (totalBolsas >= 10) 
          {
               correspondeDescuento = true;
               descuento = 15;
          }
     }
     // Calculo descuento
     porcentajeDescuento = descuento / 100;
     valorDescuento = totalSinDescuento * porcentajeDescuento;
     totalConDescuento = totalSinDescuento - valorDescuento;


     // Consigo tipo de material con mas cantidad de bolsas
     if ( (cantBolsasArena > cantBolsasCal) &&
          (cantBolsasArena > cantBolsasCemento) )
     {
          tipoProdConMasBolsas = "Arena";
     }
     else
     {
          if ( cantBolsasCal > cantBolsasCemento )
          {
               tipoProdConMasBolsas = "Cal"
          }
          else
          {
               tipoProdConMasBolsas = "Cemento"
          }
     }
     

  
     // Muestreo de datos
     document.write("El importe total a pagar (bruto y sin descuento) es: "+totalSinDescuento+"<br>");
     if (correspondeDescuento) {
          document.write("El importe total a pagar (con descuento) es: "+totalConDescuento+"<br>");
     }
     document.write("El tipo de producto con mas cantidad de bolsas es: "+tipoProdConMasBolsas+"<br>");
     document.write("El tipo de producto mas caro es: "+tipoProdMasCaro);

}
