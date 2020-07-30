// Olivieri Ezequiel
// Ferrete Iluminación (SWITCH)

/* Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.  */

 function CalcularPrecio () 
 {
 
      // Definicion de variables
      var cantidadLamparas;
      var marca;
      var muestreoDeDatos;
      var precioLampara;
      var descuento;
      var descuentoResuelto;
      var valorDescuento;
      var precioInicial;
      var precioTotalConDescuento;
      var ingresosBrutos;
      var precioMasIngresosBrutos;
 
      // Asignacion de valores
      cantidadLamparas = document.getElementById('txtIdCantidad').value;
      marca = document.getElementById('Marca').value;
      muestreoDeDatos = document.getElementById('txtIdprecioDescuento');
      precioLampara = 35;
      ingresosBrutos = 10;
 
      // Parseo a Entero
      cantidadLamparas = parseInt(cantidadLamparas);
 
      // Calculo precio segun cantidad de lamparas
      precioInicial = cantidadLamparas * precioLampara;
 
 
      // LOGICA PARA ASIGNAR DESCUENTO
      switch (cantidadLamparas) {
           case 1:
           case 2:
                descuento = 0;
                break;
           case 3:
                switch (marca) {
                     case "ArgentinaLuz":
                          descuento = 15;
                          break;
                     default:
                          descuento = 5;
                          break;
                }
                break;
           case 4:
                switch (marca) {
                     case "ArgentinaLuz": 
                     case "FelipeLamparas":
                          descuento = 25;
                          break;
                     default:
                          descuento = 20;
                          break;
                }
                break;
           case 5:
                switch (marca) {
                     case "ArgentinaLuz":
                          descuento = 40;
                          break;
                     default:
                          descuento = 30;
                          break;
                }
                break;
           
           // Caso en que cantidadLamparas >= 6
           default:
                descuento = 50;
                break;
      }
 
 
      // CALCULOS FINALES
      // Paso el descuento a numero decimal
      descuentoResuelto = descuento / 100;
      ingresosBrutos = ingresosBrutos / 100;
 
      // Calculo el valor del descuento a aplicar
      valorDescuento = descuentoResuelto * precioInicial;
 
      // Aplico descuento al precioInicial
      precioTotalConDescuento = precioInicial - valorDescuento;
 
      // CONDICION PARA INGRESOS BRUTOS 
      if ( precioTotalConDescuento > 120 )
      {
           // Saco el valor real del impuesto para luego aplicarlo
           ingresosBrutos = ingresosBrutos * precioTotalConDescuento;
           // Aplico el impuesto al precio total
           precioMasIngresosBrutos = precioTotalConDescuento + ingresosBrutos;
           // Informamos el valor del impuesto que aplicamos
           alert("Usted pago "+ ingresosBrutos +" de IIBB.");
 
      }
 
      // MUESTREO DE DATOS
      muestreoDeDatos.value = precioTotalConDescuento;
       
 }
 