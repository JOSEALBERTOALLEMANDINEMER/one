'use strict'

alert("holi");

var n1=parseInt(prompt("int n1",0));
var n2=parseInt(prompt("int n2",0));


document.write("<h1>De "+n1+" a "+ n2+" estan estos numeros: </h1>");
for (var i = n1; i<=n2; i++ ){
    document.write(i+"<br/>");
    
}
for (var i = n1; i>=n2; i-- ){
    document.write(i+"<br/>");
    
}
    


