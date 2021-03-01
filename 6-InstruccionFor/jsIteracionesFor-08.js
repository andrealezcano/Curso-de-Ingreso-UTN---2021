//al presionar el botón pedir un número. Informar si el numero es PRIMO o no.


function mostrar()
{
   
   var numeroIngresado  = parseInt(prompt("Ingrese un numero")); 

   var contadorDivisores


   
   for ( var i = 1 ;i<=numeroIngresado; i++){ 

    if (numeroIngresado%1 ==0){

      contadorDivisores++}
     }



 if ( contadorDivisores==2){
	  	alert(numeroIngresado+"es un numero primo")
	    }	 
 else {
      alert(numeroIngresado+"NO es un numero primo")
       }

}//FIN DE LA FUNCIÓN