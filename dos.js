/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  var respuesta;
  var marca;
  var precio;
  var pesoKg;
  var tipo;
  var pesoTotal=0;
  var banderaLiquido = true;
  var banderaSolido = true;
  var maximoPrecioLiquido;
  var marcaLiquidoMaximo;
  var minimoSolido;
  var marcaSolidoMinimo;

  do {

    do {
      marca = prompt ("Ingrese marca");

    } while (marca==null);

    do {
      precio = prompt ("Ingrese precio");
      precio = parseInt (precio);

    }while (isNaN(precio)||precio<0);

    do{
      pesoKg=prompt ("Ingrese peso");
      pesoKg=parseInt(pesoKg);
    }while (isNaN(pesoKg)||pesoKg<0);

    do{
      tipo=prompt ("ingrese tipo de producto, solido o liquido");

    } while (tipo != "solido"&&tipo !="liquido");

    //PUNTO A

    pesoTotal += pesoKg;

    //PUNTO B

    if (tipo == "liquido"){
      if (banderaLiquido){
        banderaLiquido = false;
        maximoPrecioLiquido = precio;
        marcaLiquidoMaximo = marca;

      } else {
        if (precio>maximoPrecioLiquido){
          maximoPrecioLiquido = precio;
          marcaLiquidoMaximo = marca;

        }
      }
    //PUNTO C  
    } else {
      if (tipo == "solido"){
        if (banderaSolido){
          banderaSolido = false; 
          minimoSolido = precio;
          marcaSolidoMinimo = marca;

        } else {
          if (precio<minimoSolido){
            minimoSolido = precio;
            marcaSolidoMinimo = marca;
          }
        }
        
      }
    }







    respuesta = confirm ("Desea continuar");
  } while (respuesta == true)

  //PUNTO A
  console.log ("Peso tota: "+pesoTotal);

  //PUNTO B
  if (marcaLiquidoMaximo){
    console.log ("Marca de liquido mas caro: "+marcaLiquidoMaximo);
  } else {
    console.log ("No se ingresaron liquidos");
  }

  //PUNTO C
  if (marcaSolidoMinimo){
    console.log ("Marca solido mas barato: "+marcaSolidoMinimo);
  } else {
    console.log ("No se ingresaron solido");
  }




}
