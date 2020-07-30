// Olivieri Ezequiel

// Ejercicio Agregado (SWITCH)
/*
    Se pide ingresar una edad y un estado cicvil
	1- a todos los mayores de edad, mostrar el mensaje "se responsable"
	2- a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
	3- a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	4- a los niños tambien informar "hagan la tarea" 
	5- a los adolescentes casado o Divorciado " sos muy joven para no ser soltero"
	6- a los mayores de edad solteros, tambien informar "a vivir la vida"
	7- a los mayores de edad casados , tambien informar "a disfrutar la pareja"
	8-a los divorciados informar tambien "a intentarlo nuevamente"

    la menor cantidad de if 
    no repetir los alert o los mensajes 
*/

function mostrar()
{
	
	// Definicion de variables
	var edadIngresada;
     var estadoCivil;
     var muestreoDeDatos1;
     var muestreoDeDatos2;
     var esPacienteDeRiesgo;

	// Asignacion de valores
	edadIngresada = document.getElementById('txtIdEdad').value;
	estadoCivil = document.getElementById('estadoCivil').value;

	// Parseo a Entero
     edadIngresada = parseInt(edadIngresada);
     
     // Defino si es paciente de riesgo
     if ( edadIngresada >= 60 ) 
     {
          esPacienteDeRiesgo = "Riesgo";
     }
     else
     {
          esPacienteDeRiesgo = "SinRiesgo";
     }



     // Aplicacion de logica y muestreo de datos

     switch (esPacienteDeRiesgo) {
          // Caso en que son personas de riesgo (+ 60)
          case "Riesgo":
               muestreoDeDatos1="se responsable";
               muestreoDeDatos2="sos persona de riesgo";
               break;
          
          // Caso en que son pacientes sin Riesgo (- 60)
          case "SinRiesgo":
               switch (edadIngresada) {
                    // Caso para niños
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                         muestreoDeDatos1 = "respeta a tus mayores";
                         muestreoDeDatos2 = "hagan la tarea";
                         break;
                    // Caso para adolescentes
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
					muestreoDeDatos1 = "respeta a tus mayores";
					muestreoDeDatos2 = " ";
                         switch (estadoCivil) {
                              case "Casado":
                              case "Divorciado":
                                   muestreoDeDatos2="sos muy joven para no ser soltero";
                                   break;
                         }
                         break;
                    // Caso para mayores de 18, y menores de 60
                    default:
                         muestreoDeDatos1 = "se responsable";
                         switch (estadoCivil) {
                              case "Soltero":
                                   muestreoDeDatos2 = "a vivir la vida";
                                   break;
                              case "Casado":
                                   muestreoDeDatos2 = "a disfrutar la pareja";
                                   break;
                              case "Divorciado":
                                   muestreoDeDatos2 = "a intentarlo nuevamente";
                                   break;
                         }
                         break;
               }
               break;
          
     }


     // MUESTREO DE DATOS
     alert(muestreoDeDatos1);
     alert(muestreoDeDatos2);

}