//una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

//en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

//en Verano: Se viaja a Mar del plata y Cataratas solamente

//en Otoño: Se viaja a todos los destinos.

//primavera: solo no se viaja a Bariloche



function mostrar()
{

 var estacionIngresada
 var destinoIngresado

 estacionIngresada =txtIdEstacion.value;
 destinoIngresado =txtIdDestino.value;

   switch (estacionIngresada) 
      {
	    case "Verano":
		 switch (destinoIngresado)
		 {
		   
		      case "Mar del Plata":
		      case "Cataratas":

            alert("se viaja")

		     break;

		     default:

		         alert("No se viaja")
		}

		 case "Invierno":
		     switch (destinoIngresado)
		  {
		   
		         case "Mar del Plata":

		          alert("se viaja")

		 break;

		 default:

		     alert("No se viaja")

		 }
		
	  case "Otoño":
		  switch (destinoIngresado)
		   {
			 case "Mar del Plata":
			 case "Cataratas":
			 case "Bariloche":  
			 
			 alert("Se viaja")

			 break;
		   
		     }

    }
}	