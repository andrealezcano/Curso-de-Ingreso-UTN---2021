/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function Mostrar()

{

//declaramos variables e  inicializamos contador

var numero;
var maximo;
var minimo;
var seguir;
var flag = 0

//crear bucle do while- mientras usuario quiera
do {
  //en el bucle-pido n°,analizar si es 1er numero, y despues si es mayor a max. y a min.(respectivamnte)
	
 numero=parseInt(prompt("Ingrese un numero"))

 if(flag==0){
    maximo= numero
	minimo= numero
	
    flag = 1
 }
  else if(numero>maximo)
  {
	maximo = numero
  }
 else if(numero<minimo)
 {
	minimo=numero
  }

 seguir = prompt("Desea ingresar otro numero")

} while (seguir == 's');

txtIdMaximo.value=maximo
txtIdMinimo.value=minimo

//en el bucle-pido n°,analizar si es 1er numero, y despues si es mayor a max. y a min.(respectivamnte)





//despues del bucle

}