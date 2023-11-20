'use strict'

alert("matrices");

var nombre="jose";

var nombres=["jose","victor", "carlos", 52, true];

var lenguajes= new Array ("php","js","go");

console.log(nombres);
console.log(lenguajes);

console.log(nombres[2]);

console.log(nombres.length);

var elemento= parseInt(prompt("que elemento quieres?", 0));

if (elemento>=nombres.length) {
    alert("introduce el numero correcto entre estos; "+ nombres.length);

    var elemento= parseInt(prompt("que elemento quieres?", 0));
}

else{

      alert("el usuario seleccionado es;"+nombres[elemento]);
}
alert(nombres[elemento]);


document.write("<h1> Lenguajes que hay;   </h1>");

for (var i =0; i < lenguajes.length; i++) {
    document.write("<li>"+lenguajes[i]+"</li>");
    
}



 lenguajes.forEach((elemento,index)=>(   //,arr console.log
    
    document.write("<li>"+index+"-"+elemento+"<li>")));

document.write("</ul>");


for (let lenguaje in lenguajes) {

    document.write("<li>"+lenguajes[lenguaje]+"</li>")
     
 }
 
 document.write("</ul>");


 var busqueda=lenguajes.find(function(lenguaje){ return lenguaje=="php";});

console.log(busqueda);

var busqueda= lenguajes.find(lenguaje=> lenguaje=="php1");

console.log(busqueda);

var busqueda= lenguajes.findIndex(lenguaje=> lenguaje=="php");

console.log(busqueda);

var precios=[10,20,30,40,50];
var busqueda= precios.some(precio=> precio<10);

console.log(busqueda);