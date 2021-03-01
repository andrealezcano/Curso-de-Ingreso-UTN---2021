/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

var importe  ;

var resultado ;


importe = txtIdImporte.value ;

resultado = txtIdResultado.value ;

importeParseado = parseInt(importe) ;

resultadoParseado = parseInt(resultado) ;

txtIdResultado.value = importe * 0.75 ;

}
