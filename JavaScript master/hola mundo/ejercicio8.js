'use strict'

alert("ultimo");

var n1 = parseInt(prompt("agrega el numero 1; ", 0));
var n2 = parseInt(prompt("agrega el numero 2; ", 0));

while (isNaN(n1) || isNaN(n2)) {

    var n1 = parseInt(prompt("agrega numeros porfavor, agrega el numero 1; ", 0));
    var n2 = parseInt(prompt("agrega numeros porfavor, agrega el numero 2; ", 0));
    
}

// var l= n1+n2;
// document.write("<h2> la suma es = " + l + "</h2>");
// alert("la suma es "+ l);
// console.log("la suma es "+ l);

// var l= n1-n2;
// document.write("<h2> la resta es = " + l + "</h2>");
// alert("la resta es "+ l);
// console.log("la resta es "+ l);

var resultado= "la suma es; "+(n1+n2)+"<br/>"+
               "la resta es; "+(n1-n2)+"<br/>";

    var resultado2=   "la suma es; "+(n1+n2)+"\n"+
                     "la resta es; "+(n1-n2)+"\n";

document.write(resultado);
alert(resultado2);