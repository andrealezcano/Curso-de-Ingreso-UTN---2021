//al presionar el botón pedir un número. 
//mostrar los numeros divisores desde el 1 al número ingresado,
// y mostrar la cantidad de numeros divisores encontrados.

function mostrar()
{

	var numero
 
	var contadorDivisores = 0
	
	numero= parseInt(prompt("Ingrese un numero"))

    for (var i = 1; i<= numero; i++) {
		if(numero % i ==0)
		{
			contadorDivisores++;
			console.log(i)

		}
		
		console.log("Divisores encontrados"+contadorDivisores)
	}




}//FIN DE LA FUNCIÓN