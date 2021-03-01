/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
    var numero

	var numeroIngresado;

	var datoValidado 


	numero= prompt("ingrese un número entre 0 y 10.");

	numeroIngresado =parseInt(numero)



	while ( numeroIngresado>0 && numeroIngresado<10)
	 {

		datoValidado=numeroIngresado
	}
	
	txtIdNumero.value = datoValidado

	alert("Ingrese otro numero valido")

}//FIN DE LA FUNCIÓN