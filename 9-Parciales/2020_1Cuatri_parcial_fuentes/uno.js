// Olivieri Ezequiel
// Parcial 2020 - Ejercicio 1

/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total.  
*/

function mostrar()
{
	
	// Definicion de variables
	var contador;
	var tipoDeProducto;
	var precioDeProducto;
	var cantidadDeUnidades;
	var marcaDeProducto;
	var fabricanteDeProducto;
	var cantAlcoholBarato;
	var fabrAlcoholBarato;
	var alcoholMasBarato;
	var cantUnidAlcohol;
	var cantAlcoholIngresado;
	var cantUnidBarbijo;
	var cantBarbijoIngresado;
	var cantUnidJabon;
	var cantJabonIngresado;
	var promedioPorCompra;


	// Asigno valores iniciales
	contador = 0;
	cantUnidAlcohol = 0;
	cantAlcoholIngresado = 0;
	cantUnidBarbijo = 0;
	cantBarbijoIngresado = 0;
	cantUnidJabon = 0;
	cantJabonIngresado = 0;


	// Lógica del programa
	while( contador < 5 )
	{

		// Actualizo contador
		contador++;



		// Pido tipo de producto para prevencion de contagio
		tipoDeProducto = prompt("Ingrese el tipo de producto para prevencion de contagio");
		// Verifico tipo de producto
		while ( (tipoDeProducto != "barbijo") &&
			   (tipoDeProducto != "jabon") &&
			   (tipoDeProducto != "alcohol") )
		{
			tipoDeProducto = prompt("ERROR: Ingrese un tipo de producto valido (barbijo, jabon o alcohol)");
		}

		// Pido precio del producto
		precioDeProducto = prompt("Ingrese el precio del producto");
		// Parseo a entero el numero ingresado
		precioDeProducto = parseInt(precioDeProducto);
		// Verifico precio del producto
		while ( (precioDeProducto < 100) ||
		(precioDeProducto > 300) )
		{
			precioDeProducto = prompt("ERROR: Ingrese un precio de producto valido (entre 100 y 300)");
		}

		// Pido cantidad de unidades del producto
		cantidadDeUnidades = prompt("Ingrese cantidad de unidades");
		// Parseo a entero el numero ingresado
		cantidadDeUnidades = parseInt(cantidadDeUnidades);
		// Verifico cantidad de unidades
		while ( (cantidadDeUnidades < 1) ||
			   (cantidadDeUnidades > 1000) )
		{
			cantidadDeUnidades = prompt("ERROR: Ingrese una cantidad de unidades valida (de 1 a 999 unidades)");
		}

		// Pido marca y fabricante del producto
		marcaDeProducto = prompt("Ingrese la marca del producto");
		fabricanteDeProducto = prompt("Ingrese el fabricante del producto");



		// Switcheo por tipo de producto
		switch (tipoDeProducto)
		{

			case "alcohol":
				// Actualizo contador de unidades y la cant de ingresos
				cantAlcoholIngresado++;
				cantUnidAlcohol += cantidadDeUnidades;

				// Busco el alcohol mas barato
				if ( cantAlcoholIngresado == 1 )
				{
					alcoholMasBarato = precioDeProducto;
					cantAlcoholBarato = cantidadDeUnidades;
					fabrAlcoholBarato = fabricanteDeProducto;
				}
				else
				{
					if ( precioDeProducto < alcoholMasBarato )
					{
						alcoholMasBarato = precioDeProducto;
						cantAlcoholBarato = cantidadDeUnidades;
						fabrAlcoholBarato = fabricanteDeProducto;
					}
				}

				break;

			case "barbijo":
				// Actualizo contador de unidades y la cant de ingresos
				cantBarbijoIngresado++;
				cantUnidBarbijo += cantidadDeUnidades;

				break;

			case "jabon":
				// Actualizo contador de unidades y la cant de ingresos
				cantJabonIngresado++;
				cantUnidJabon += cantidadDeUnidades;

				break;

		}

		

	}

	// Busco el tipo de producto que mas unidades posee y saco promedio por compra
	if ( (cantUnidAlcohol > cantUnidBarbijo) &&
		(cantUnidAlcohol > cantUnidJabon) )
	{
		promedioPorCompra = cantUnidAlcohol / cantAlcoholIngresado;
	} 
	else
	{
		if ( cantUnidBarbijo > cantUnidJabon )
		{
			promedioPorCompra = cantUnidBarbijo / cantBarbijoIngresado;
		}
		else
		{
			promedioPorCompra = cantUnidJabon / cantJabonIngresado;
		}
	}


	// MUESTREO DE DATOS
	document.write("Cantidad y fabricante del mas barato de los alcoholes: "+cantAlcoholBarato+", "+fabrAlcoholBarato+"<br>");
	document.write("Promedio por compra del tipo con mas unidades: "+promedioPorCompra+"<br>");
	document.write("Cantidad total de unidades de jabones: "+cantUnidJabon);

}
