function mostrar()
{
 
	var edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	if (edad > 17 ) {alert("usted es mayor de edad")}

	else  { alert ("usted es menor de edad");
	
	nombre = prompt("Ingrese su nombre");
	
	alert("Usted se llama" + nombre + "y tiene" + edad)} ;

}//FIN DE LA FUNCIÓN