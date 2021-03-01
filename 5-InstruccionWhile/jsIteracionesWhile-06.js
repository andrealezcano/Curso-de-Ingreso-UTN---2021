function mostrar()
{
	var numero = 0
	var i = 0

	while (i<5)
	 {
		numero = numero + parseInt(prompt("Ingrese un numero"));

		i++;
	 }



  txtIdSuma.value = numero
  txtIdPromedio.value = numero/5



}//FIN DE LA FUNCIÓN