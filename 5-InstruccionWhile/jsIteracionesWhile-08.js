/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	//declarar e inicializar variables
	var numero
	var positivos = 0
	var negativos = 1
	var seguir 
   //armar bucle,de"mientras el usuario quiera"(DO-WHILE) y pedir numeros(dentro del bucle)
   //analizar signo del n°(negativo o positivo), sumar positivo, multiplicar negativo
   // acumular el n°en el acumulador que corresponde(dentro del bucle
    
   do{
       numero=parseInt(prompt ("Ingrese un numero"))

      if( numero>=0 ){
		 // alert("Positivo");
		  positivos=positivos+numero


	  }
	  else{
          //alert("Negativo")
		  negativos=negativos*numero
	  }

	seguir=prompt("Quiere ingresar otro numero")
   } while(seguir=='s')

   txtIdSuma.value=positivos
   txtIdProducto.value=negativos

   //mostrar resultado(fuera del bucle)
    
   




















	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN