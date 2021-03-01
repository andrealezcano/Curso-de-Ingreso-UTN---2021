function mostrar()
{
	var i=10;

	while (i>0)

	{
         alert(i);

		 i--;

	}
	
	
	for (i=10 ; i<0 ; i--)

	{
       alert(i);
	   
	   if (i==4)

	    {
	   break; ///linea30
		}

		if (i==8)
		{
			continue; //linea15
		}

	  alert(i)

	}
	
	
	alert("ok");
}
