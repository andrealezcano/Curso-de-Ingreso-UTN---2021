/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

//A - Suma

function Sumar () 
{
	
var precio1 ;

var precio2 ;

var precio3 ;

var precio1Parseado ;

var precio2Parseado ;

var precio3Parseado ;

var suma ; 

precio1 = txtIdPrecioUno.value ;

precio2 = txtIdPrecioDos.value ;

precio3 = txtIdPrecioTres.value ;

precio1Parseado = parseInt(precio1) ;

precio2Parseado = parseInt(precio2) ;

precio3Parseado = parseInt(precio3) ;

suma = precio1Parseado + precio2Parseado + precio3Parseado ;

 alert(suma) ;

}

function Promedio () 
{
    
    var precio1 ;

    var precio2 ;
    
    var precio3 ;
    
    var precio1Parseado ;
    
    var precio2Parseado ;
    
    var precio3Parseado ;
    
    var promedio ;

    
    precio1 = txtIdPrecioUno.value ;
    
    precio2 = txtIdPrecioDos.value ;
    
    precio3 = txtIdPrecioTres.value ;
    
    precio1Parseado = parseInt(precio1) ;
    
    precio2Parseado = parseInt(precio2) ;
    
    precio3Parseado = parseInt(precio3) ;

    promedio = (precio1Parseado + precio2Parseado + precio3Parseado) / 3 ;
    
  alert(promedio)  ;

}
function PrecioFinal () 
{

    var precio1 ;

    var precio2 ;
    
    var precio3 ;
    
    var precio1Parseado ;
    
    var precio2Parseado ;
    
    var precio3Parseado ;
    
    var suma ;

    var precioFinal ;
    
    precio1 = txtIdPrecioUno.value ;
    
    precio2 = txtIdPrecioDos.value ;
    
    precio3 = txtIdPrecioTres.value ;
    
    precio1Parseado = parseInt(precio1) ;
    
    precio2Parseado = parseInt(precio2) ;
    
    precio3Parseado = parseInt(precio3) ;
    
    suma = precio1Parseado + precio2Parseado + precio3Parseado ;

    precioFinal = suma * 1.21;
    
     alert(precioFinal) ;
     


}