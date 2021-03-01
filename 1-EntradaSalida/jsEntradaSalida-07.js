/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
	var numeroUno ;

	var numeroDos ;

	var suma ; 

	var numeroUnoParseado ;

	var numeroDosParseado ;

	numeroUno = txtIdNumeroUno.value ;

	numeroDos = txtIdNumeroDos.value ;

	numeroUnoParseado = parseInt(numeroUno) ;

	numeroDosParseado = parseInt(numeroDos) ;

	suma = numeroUnoParseado + numeroDosParseado ;

	alert (numeroUnoParseado + numeroDosParseado ) ;

	
}

function restar()
{
	var numeroUno ;

	var numeroDos ;

	var restar ;

	var numeroUnoParseado ;

	var numeroDosParseado ; 

	numeroUno = txtIdNumeroUno.value ;

	numeroDos = txtIdNumeroDos.value ;

	numeroUnoParseado = parseInt(numeroUno) ;

	numeroDosParseado = parseInt(numeroDos) ;

	suma = numeroUnoParseado - numeroDosParseado ;

	alert (numeroUnoParseado - numeroDosParseado ) ;
	
}

function multiplicar()
{ 
	var numeroUno ;

	var numeroDos ;

	var multiplicar ;

	var numeroUnoParseado ;

	var numeroDosParseado ;

	numeroUno = txtIdNumeroUno.value ;

	numeroDos = txtIdNumeroDos.value ;

	numeroUnoParseado = parseInt(numeroUno) ;

	numeroDosParseado = parseInt(numeroDos) ;

	multiplicar = numeroUnoParseado * numeroDosParseado ;

	alert (numeroUnoParseado * numeroDosParseado ) ;
}

function dividir()
{
	var numeroUno ;

	var numeroDos ;

	var numeroUnoParseado ;

	var numeroDosParseado ;

	var dividir ;

	numeroUno = txtIdNumeroUno.value ;

	numeroDos = txtIdNumeroDos.value ;

	numeroUnoParseado = parseInt(numeroUno) ;

	numeroDosParseado = parseInt(numeroDos) ;

	dividir = numeroUnoParseado / numeroDosParseado ;

	alert (numeroUnoParseado / numeroDosParseado ) ;
	
}

