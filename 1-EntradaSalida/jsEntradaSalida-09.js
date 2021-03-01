/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
   var sueldo ;

   var sueldoParseado;

   var resultado ;

   var resultadoParseado

  sueldo = txtIdSueldo.value ;

  resultado = txtIdResultado.value ;


  sueldoParseado = parseInt(sueldo) ;

  resultadoParseado = parseInt(resultado) ;

  txtIdResultado.value = sueldo * 1.10 ;


}
