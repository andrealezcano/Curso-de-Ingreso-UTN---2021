function mostrar()
{
	var edad ;

	var seleccionarEstado ;
	 

	seleccionarEstado = estadoCivil.value ;

	edad = txtIdEdad.value ;

	edad = parseInt(edad) ;



	if ( edad<18 &&  seleccionarEstado != "Soltero" ) 

	   { alert("Es muy pequeño para NO ser soltero") } 



	


}//FIN DE LA FUNCIÓN