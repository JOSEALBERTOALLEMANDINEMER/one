alert('hola mundo');

var nombre="jose"
var altura= 189;

var concatenacion = nombre + " " +altura

document.write(nombre);
document.write(altura);
document.write(concatenacion);


var datos=document.getElementById("datos");
datos.innerHTML = concatenacion;

var datos=document.getElementById("datos");
datos.innerHTML = 

`
  <h1>soy la caja de datos otra vez </h1>
  <h2>mi nombre es; ${nombre}</h2>
  <h3>mido ${altura} cm</h3>


  `




;


if( altura>= 190){

    datos.innerHTML += `<h1>eres una persona ALTA </h1>`;
}

else{datos.innerHTML += `<h1>eres una persona BAJA </h1>`;}



function muestraminombre(nombre,altura){

    var datos=document.getElementById("datos");
datos.innerHTML = 

`
  <h1>soy la caja de datos otra vez </h1>
  <h2>mi nombre es; ${nombre}</h2>
  <h3>mido ${altura} cm</h3>


  `




;
}

muestraminombre("jooo",173);

for(var i =0; i<=2020; i++){

    datos.innerHTML+= "<h2>estamos en el ano" +i ;
}