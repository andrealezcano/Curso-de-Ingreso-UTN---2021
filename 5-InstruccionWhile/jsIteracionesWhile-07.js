/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
  var numero

  var contador=0

  var acumulador=0

  var seguir 
  
  do{
      numero = parseInt(prompt("Ingrese un numero"));

      acumulador=acumulador+numero

      contador++

      seguir = prompt("Desea ingresar un numero mas")

    }while (seguir == 's')

   promedio = acumulador/contador

  txtIdSuma.value = acumulador
  txtIdPromedio.value = promedio

  

}//FIN DE LA FUNCIÓN