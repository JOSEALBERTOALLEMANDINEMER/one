'use strict'

alert("holi");

var n = parseInt(prompt("agrega el numero; ", 0));

while (isNaN(n)) {

    var n = parseInt(prompt("agrega el numero; ", 0));
    
}

if(n%2==0){

    alert("el numero es par");
    document.write("<h2>El numero "+n+ " es par</h2>");
}
else { document.write("<h2>El numero "+n+ " es ipar</h2>");}