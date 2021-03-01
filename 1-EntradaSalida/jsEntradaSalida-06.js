/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var  numeroUno

	var numeroDos

	var suma

	var numeroUnoParseado

	var numeroDosParseado


	numeroUno = txtIdNumeroUno.value

	numeroDos = txtIdNumeroDos.value

	numeroUnoParseado = parseInt(numeroUno)

	numeroDosParseado = parseInt(numeroDos)

	suma = numeroUnoParseado + numeroDosParseado

	alert (numeroUnoParseado + numeroDosParseado )



}

