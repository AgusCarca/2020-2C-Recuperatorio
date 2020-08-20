/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	var contador=0;
	var nombre;
	var peso;
	var sexo;
	var edad;
	var contadorMujeres=0;
	var maximoPesoHombre;
	var banderaPeso=true;
	var nombrePesoHombre;
	var acumuladorEdad=0;
	var edadPromedio;


	while (contador<5){

		contador++;
		
		do {
			nombre = prompt ("Ingrese nombre");
		} while (nombre == null);

		do {
			peso = prompt ("Ingrese peso");
			pedo = parseInt (peso);

		} while (isNaN(peso)||peso<1);

		do{
			sexo = prompt ("Ingrese sexo con f o m");

		} while (sexo =! "f" && sexo != "m");

		do{
			edad = prompt ("Ingrese edad");
			edad = parseInt (edad);
		} while (isNaN(edad)||edad<0);

		
		//PUNTO A
		if (sexo == "f"){
			contadorMujeres++;
		}
		
		//PUNTO B
		acumuladorEdad+=edad;

		//PUNTO C

		if (sexo=="m"){
			if (banderaPeso){
				banderaPeso = false;
				maximoPesoHombre=peso;
				nombrePesoHombre=nombre;
	
			} else {
				if (peso > maximoPesoHombre){				
					maximoPesoHombre=peso;
					nombrePesoHombre=nombre;
				}
			}
		
		}






	} //end while

	//PUNTO B
	edadPromedio = acumuladorEdad/contador;


	//PUNTO A
	console.log ("Cantidad mujeres= "+contadorMujeres);

	//PUNTO B
	console.log ("El promedio de edad es: "+edadPromedio);

	//PUNTO C
	if (nombrePesoHombre == undefined){
		console.log ("no se ingresaron hombre");
	} else {
		console.log ("Nombre hombre mas pesado: "+nombrePesoHombre);
	}
	



	
}
