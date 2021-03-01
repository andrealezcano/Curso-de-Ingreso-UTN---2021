//una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

//en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

//en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

//en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento


function mostrar()
{
	var destino 

	var estacionIngresada 

	var Aumento = 0

	var Descuento = 0

	var precioFinal

	const precioBase= 15000

	estacionIngresada= txtIdEstacion.value;
	destino = txtIdDestino.value;


    switch (estacionIngresada) 
	    { 
		 case "Invierno":	
		 if (destino=="Bariloche"){
			 Aumento = 20
		 }

		  else if (destino == "Mar del Plata")
		  {
             Descuento = 20;
		  }

		  else
		  {
             Descuento = 10;
		  }
		 break;

		 case "Verano":	
		 if (destino=="Bariloche"){
			Descuento = 20
		}

		 else if (destino == "Mar del Plata")
		 {
			Aumento = 20;
		 }

		 else
		 {
			Aumento = 10;
		 }
		 

		 break;

		 case "Otoño":	
		 case "Primavera":

		 if (destino=="Cordoba"){
			precioFinal = precioBase
		}

		 else
		 {
			Aumento = 10;
		 }

		 break;
	}
	
	if (Aumento!=0)
	{
		precioFinal = precioBase + precioBase * Aumento/100 ;
	}
	else if (Descuento!=0)
	{
		precioFinal = precioBase -  precioBase * Descuento/100 ;
	}
    else 
	{
		precioFinal = precioBase;
	}

	alert("Precio Final $" + precioFinal);

}//FIN DE LA FUNCIÓN