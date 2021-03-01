/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var fahrenheit ;

    var centigrados ;

    var fahrenheitParseados ;

    fahrenheit = txtIdTemperatura.value ;

    fahrenheitParseados = parseInt(fahrenheit) ;

    centigrados = (fahrenheitParseados - 32) * 5/9 ;

    alert( fahrenheitParseados + "grados Fahrenheit son" +  centigrados + "grados Centigrados") ;
	
}

function CentigradosFahrenheit () 
{
	var fahrenheit ;

    var centigrados ;

    var centigradosParseados ;

    centigrados = txtIdTemperatura.value ;

    centigradosParseados = parseInt(centigrados) ;

    fahrenheit = ( centigradosParseados * 9 / 5) + 32  ;

    alert( centigradosParseados + "grados Centigrados son" +  fahrenheit + "grados Fahrenheir") ;
}
