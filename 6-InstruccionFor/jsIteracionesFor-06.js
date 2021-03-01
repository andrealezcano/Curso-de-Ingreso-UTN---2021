//al presionar el botón pedir un número. 
//mostrar los numeros pares desde el 1 al número ingresado,
// y mostrar la cantidad de numeros pares encontrados.

function mostrar()
{
	//1.declarar variables
	//2.pedirNumero
	//3.hacer una variable que tome n°desde 1 hasta n°ingresado
	//4.analizo si el n° es par . lo muestro y lo cuento
	var numero
 
	var contadorPares = 0
	
	numero= parseInt(prompt("Ingrese un numero"))

    for (var i = 1; i<= numero; i++) {
		if(i % 2==0)
		{
			contadorPares++;
			console.log(i)

		}
		
		console.log("Pares encontrados"+contadorPares)
	}





}//FIN DE LA FUNCIÓN