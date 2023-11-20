'use strict'

alert("holo");


var resultado = confirm("estas seguro de continuar?");
console.log(resultado);

if (resultado==true) {

    console.log("esta seguro");
    
} else{console.log("no esta seguro");}


var edad= prompt("cual es tu edad?", 18);

console.log( typeof edad);