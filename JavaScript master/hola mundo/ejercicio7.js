'use strict'

alert("holu");

var n= parseInt(prompt("de que numero quieres la tabla de multiplicar?", 0));

document.write("<h1>Tabla del " + n + "</h1>");

for (var i = 0;  i<= 10; i++) {
    
    var a= i*n;
    document.write(i + "  *  "+ n + " =  "+ a + "</br>");
    
}



for (var c = 0;  c<= 10; c++) {
    
    document.write("<h1>Tabla del " + c + "</h1>");
for (var i = 0;  i<= 10; i++) {
    
    var a= i*c;
    document.write(i + "  *  "+ c + " =  "+ a + "</br>");
    
}
}