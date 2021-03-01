/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var resto ;

	var dividendo ;

	var divisor ;

	dividendo = txtIdNumeroDividendo.value ;

	divisor = txtIdNumeroDivisor.value ;

	dividendoParseado = parseInt (dividendo) ;
	
	divisorParseado = parseInt(divisor) ;

	resto = dividendoParseado / divisorParseado ;


	alert(resto);
}
