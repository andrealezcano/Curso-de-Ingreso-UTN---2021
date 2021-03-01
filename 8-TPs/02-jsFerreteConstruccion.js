/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo ;

    var ancho ;

    var largoParseado ;

    var anchoParseado ;

    var perimetroRectangular ;

    var alambre ;

    largo = txtIdLargo.value ;

    ancho = txtIdAncho.value ;

    largoParseado = parseInt(largo) ;

    anchoParseado = parseInt(ancho) ;

    perimetroRectangular = (largoParseado * 2 ) + (anchoParseado *2 )  ;

    alambre = (perimetroRectangular) * 3 ;
    
    alert (alambre) ;


}
function Circulo () 
{

    var radio ;

    var radioParseado ;

    var pi ;

    var diametro ;

    var perimetro ;
    
    var alambre ;

    radio = txtIdRadio.value ;

    radioParseado = parseInt(radio) ;

    diametro = radioParseado * 2 ;

    pi = 3.14 ;

    perimetro = diametro * pi ;

    alert (perimetro) ;

}
function Materiales () 
{

    var largo ;

    var ancho ;

    var largoParseado ;

    var anchoParseado ;

    var medidametroCuadrado ;

    var bolsaCemento ;

    var bolsaCal ;

    var calculoPerimetro ;

    var bolsasTerrero ;

    largo = txtIdLargo.value ;

    ancho = txtIdAncho.value ;

    largoParseado = parseInt(largo) ;

    anchoParseado = parseInt(ancho) ;

    perimetroRectangular = (largoParseado * 2 ) + (anchoParseado *2 )  ;

    metroCuadrado = largoParseado * anchoParseado ;

    bolsaCemento = metroCuadrado / 2  ;

    bolsaCal = metroCuadrado / 3  ;


  alert("Usted necesita " + bolsaCal  + "de bolsas de Cal y" + bolsaCemento + "de bolsas de cemento") ;


	
}