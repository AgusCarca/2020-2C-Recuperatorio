/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	var respuesta;

	do {

		var sexoTitular;
		var lugar;
		var temporada;
		var cantidadPersonas;
		var contadorBariloche=0;
		var contadorCataratas=0;
		var contadorSalta=0;
		var lugarMasElegido;
		var banderaTitular = true;
		var maximoPersonas;
		var sexoTitularMasPasajeros;
		var acumuladorInvierno=0;
		var contadorInvierno=0;
		var promedio;

		do {
			sexoTitular= prompt ("Ingrese sexo del titular con f o m");
		} while (sexoTitular!="f"&&sexoTitular!="m");

		do{
			lugar = prompt ("Ingrese lugar, bariloche, cataratas o salta");
		} while (lugar!="bariloche"&&lugar!="cataratas"&&lugar!="salta");

		do{
			temporada=prompt ("Ingrese temporada con o,i,v,p");
		} while (temporada !="o"&&temporada!="i"&&temporada!="v"&&temporada!="p");

		do{
			cantidadPersonas = prompt ("Ingrese cantidad de personas");
			cantidadPersonas = parseInt(cantidadPersonas);
		} while (isNaN(cantidadPersonas)||cantidadPersonas<0);

		//PUNTO A
		switch (lugar){
			case "bariloche":
				contadorBariloche++;
				break;
			case "cataratas":
				contadorCataratas++;
				break;
			case "salta":
				contadorSalta++;
				break;
		}

		//PUNTO B

		if (banderaTitular){
			banderaTitular=false;
			sexoTitularMasPasajeros = sexoTitular;
			maximoPersonas = cantidadPersonas;
		} else {
			if (maximoPersonas>cantidadPersonas){
				sexoTitularMasPasajeros = sexoTitular;
				maximoPersonas = cantidadPersonas;
			}
		}

		//PUNTO C

		if (temporada== "i"){
			acumuladorInvierno+=cantidadPersonas;
			contadorInvierno++;

		}





		respuesta= confirm ("Desea continuar");
	} while (respuesta == true); //fin while


	//punto a
	if (contadorBariloche>contadorCataratas && contadorBariloche>contadorSalta){
		lugarMasElegido = "Bariloche";
	} else {
		if (contadorCataratas>contadorBariloche && contadorCataratas>contadorSalta){
			lugarMasElegido = "cataratas";

		} else {
			lugarMasElegido = "Salta";
		}
	}

	//punto c
	promedio = acumuladorInvierno/contadorInvierno;
	

	

	//PUNTO A
	console.log ("El lugar mas elegido es: "+lugarMasElegido);

	//PUNTO B
	console.log ("El sexo del titular que lleva mas pasajeros es: "+sexoTitularMasPasajeros);

	//PUNTO C
	if (temporada == "i"){
		console.log ("El promedio de viajes en invierno es: "+promedio);
	} else {
		console.log ("No se viajo en invierno");
	}

}
