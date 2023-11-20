'use strict'

alert("terror");

var categorias=["accion","comedia","terror"];
var peliculas=["la verdad duele","la vida es bella","gran torino"];

var cine=[categorias,peliculas];

console.log(cine);

console.log(cine[0][1]);

var elemento= "";

do{ elemento=prompt("int pelicula");

      peliculas.push(elemento);
}

while (elemento!="acabar");

peliculas.pop();

peliculas.push("batman");
console.log(peliculas);

peliculas[0]=undefined;


var indice= peliculas.indexOf("gran torino");

console.log(indice);

if (indice>-1) {

    peliculas.splice(indice,1);
    
}

var peliculasstring= peliculas.join();



console.log(peliculas);
console.log(peliculasstring);

var cadena="texto1,texto2,texto3";
var cadenaarray=cadena.split(",");
console.log(cadenaarray);





console.log(peliculas);
peliculas.sort();
console.log(peliculas);
peliculas.reverse();
console.log(peliculas);

