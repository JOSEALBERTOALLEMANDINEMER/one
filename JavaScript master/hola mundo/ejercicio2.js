'use strict'

alert("hola");

var suma= 0;
var contador= 0;

do{

    var numero= parseInt( prompt("int n hasta que sea -",0));
    
    if (isNaN(numero)) {

        numero=0;
        
    }

    else if(numero>=0){

            suma=suma+numero;
            // suma+-numero;
            contador++;
    }
console.log(suma);
console.log(contador);
    

}while(numero>=0)

alert("la suma de todos es; " +suma);
alert("la media de todos es; " +(suma/contador));