'use strict'

alert("transformar textos");


var numero=4444;
var texto1="bienvenido al curso";
var texto2="es buen curso";

var dato=numero.toString();
    // dato=texto1.toUpperCase();
    // dato=texto2.toLowerCase();


console.log(dato);
console.log(typeof dato);


var nombre="jose alberto allemandi nemer";
var angela="angela vanessa cardona vanessa orjuela";
var arraycontado=["hola", "hola"];

console.log(nombre.length);
console.log(angela.length);
console.log(arraycontado.length);

var textototal=nombre+ " "+angela;

console.log(textototal);

console.log(textototal.length);

var textototall= nombre.concat(" "+angela);

console.log(textototall);

console.log(textototall.length);


var busqueda = angela.indexOf("vanessa");
    busqueda = angela.search("vanessa");
    

console.log(busqueda);

var busquedaa = angela.lastIndexOf("vanessa");

console.log(busquedaa);

var busquedaaa = angela.match("vanessa");

console.log(busquedaaa);

var busquedaaa = angela.match(/vanessa/gi);

console.log(busquedaaa);

var busquedaaaa = angela.substr(14,5);

console.log(busquedaaaa);

var busquedaaaaa = angela.charAt(20);

console.log(busquedaaaaa);

 var busquedaaaaaa = angela.startsWith("victor"); //endsWith includes

console.log(busquedaaaaaa);


var busquedaaaaaaa = angela.replace("cardona", "jose");

console.log(busquedaaaaaaa);

var busquedaaaaaaaa = angela.slice(14,22);

console.log(busquedaaaaaaaa);

var busquedaaaaaaaaa = angela.split(" ");

console.log(busquedaaaaaaaaa);

var busquedaaaaaaaaaa = angela.trim();//quita espacios delante y atras

console.log(busquedaaaaaaaaaa);





