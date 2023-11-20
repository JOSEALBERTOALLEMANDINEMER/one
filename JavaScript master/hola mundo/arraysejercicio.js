'use strict'

alert("muy bien");

// var numeros= new Array(6);

// for (var i= 0; i <= 5; i++) {
//     numeros[i]=parseInt(prompt("introduce un numero",0));
    
// }

// console.log(numeros);



function mostrararray(elementos,textocustom=""){

    document.write("<h1>contenido del array"+textocustom+"</h1>");
    document.write("<ul>");
elementos.forEach((elemento, index)=>{document.write("<li>"+elemento+"</li>");});

document.write("<ul>");
}


var numeros= [];

for (var i= 0; i <= 6; i++) {
    numeros.push(parseInt(prompt("introduce un numero",0)));
    
}

console.log(numeros);
document.write(numeros);


mostrararray(numeros);

console.log(numeros);

numeros.sort();
console.log(numeros);


mostrararray(numeros," ordenados");

// ordena n ascendente
numeros.sort(function(a,b){return a-b});
mostrararray(numeros," ordenados ascendentes");



numeros.reverse();
mostrararray(numeros,"revertidos");

document.write("<h1>el array tiene; "+numeros.length+" elementos</h1>");


var busqueda=parseInt(prompt("busca un numero",0));

var posicion=numeros.findIndex((numero)=>numero==busqueda);

// if(posicion && posicion != -1){
    if(posicion != -1) {
    document.write("<h1>encontrado</h1>");

document.write("posicion de la busqueda"+posicion+"</h1>");


} else{
    document.write("<h1> no encontrado</h1>");

}


