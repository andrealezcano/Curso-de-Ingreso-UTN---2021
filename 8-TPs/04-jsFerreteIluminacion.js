/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
 //function CalcularPrecio () 
 
 {
  var precioDescuento

  var cantidad

  var marca

  var importeFinal
  
  var precioUnitario = 35

  var ahorro = precioUnitario*0.01 

  var importeIIBB = importeFinal*10/100

  var impuestoIIBB = importeFinal*0.1
  
  cantidad = txtIdCantidad.value

  cantidad = parseInt(cantidad)

  marca = Marca.value

  importeFinal = txtIdprecioDescuento.value

  importeFinal = precioUnitario + ahorro
   


  switch (key) {
    case value:
      
      break;
  
    default:
      break;
  }

 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 {

   var precioDescuento

   var cantidad

   var marca

   var importeFinal
   
   var precioUnitario = 35

   var ahorro = precioUnitario*0.01 

   var importeIIBB = importeFinal*10/100

   var impuestoIIBB = importeFinal*0.1
   
   cantidad = txtIdCantidad.value

   cantidad = parseInt(cantidad)

   marca = Marca.value

   importeFinal = txtIdprecioDescuento.value

   importeFinal = precioUnitario + ahorro

    


    if (cantidad >= 6) 
    {
        ahorro * 50
     } 
     
     else if (cantidad == 5 && marca == "ArgentinaLuz")
      {
        ahorro * 40
      }

         else (cantidad == 5 && marca != "ArgentinaLuz") 
          { 
           ahorro * 30
          }
     if (cantidad == 4 && marca == "ArgentinaLuz" || "FelipeLamparas")
     {
       ahorro * 25
     }
      else (cantidad == 4 && marca != "ArgentinaLuz" || "FelipeLamparas")
     {
       ahorro * 20
     }

     if (cantidad == 3 && marca == "ArgentinaLuz")
     {
       ahorro * 15
     }
      else if (cantidad == 3 && marca == "FelipeLamparas")
     {
       ahorro * 10
      }
       else (cantidad == 3 && marca != "ArgentinaLuz" || "FelipeLamparas")
        {
          ahorro * 5
        }
    
    if (importeFinal > 120)
    {
      importeFinal + importeIIBB

      && alert("Usted pago"+ impuestoIIBB + "de IIBB")
    }

 }
  









