'use strict'

window.addEventListener('load', function(){

    console.log("Dom cargado!");


  var pelicula = {

          titulo: "batman vs superman",
          year: 2017,
          pais: 'estados unidos'
  };

  pelicula.titulo= "superman begins";

  console.log(pelicula);
  console.log(pelicula.titulo);



  var peliculas=[{
    titulo:"simple no?",
    year:1334,
    pais:"francia"
  }, pelicula];

  console.log(peliculas);



  var cajapeliculas= document.querySelector("#peliculas");
  var index;
  for(index in peliculas){

    var p= document.createElement("p");
    p.append(peliculas[index].titulo+" - "+peliculas[index].year);
    cajapeliculas.append(p);

  }











});