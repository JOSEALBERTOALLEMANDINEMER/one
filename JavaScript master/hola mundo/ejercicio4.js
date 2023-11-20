'use strict'

alert("hola");

var n1= parseInt(prompt("int numero 1 ", 0));
var n2=parseInt(prompt("int n2",0));

document.write("<h2> Los numeros impares del " +n1+ " al " +n2+ " son; </h2>");

for (var i = n1; i<=n2;  i++) {
    if (i%2!=0) {

        document.write(i+ "<hr/>");
        
    }
    
}

for (var i = n1; i>=n2;  i--) {
    if (i%2!=0) {

        document.write(i+ "<hr/>");
        
    }
    
}