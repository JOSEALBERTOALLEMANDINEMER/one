'use strict'

alert("gg");

var nombre=prompt("<br/>mete un nombre");
var apellido=prompt("mete un apellido");

// var texto= "mi nombre es; " +nombre+ "mis apellidos son; "+apellido;

// document.write(texto);

var texto= `

     <h1>hola que tal</h1>
     <h3> mi nombre es ${nombre} y mi apellido es ${apellido}</h3>
`

document.write(texto);