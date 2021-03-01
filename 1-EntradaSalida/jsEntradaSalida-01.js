/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	
	var numero1;
	var numero2; 
	var suma 

   
	   numero1 = prompt("Ingrese un numero");
	   numero2 = prompt("Ingrese otro numero");

	   numero1parseado= parseInt(numero1)
	   numero2parseado= parseInt(numero2)
   
	   suma = numero1parseado + numero2parseado
   
	   alert ("La suma de sus numeros ingresados es " +suma);
 }


