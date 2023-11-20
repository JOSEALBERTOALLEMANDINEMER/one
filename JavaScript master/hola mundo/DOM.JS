'USE STRICT'

alert("dom");

function cambiaColor(color){
    caja.style.background= color;
}

// var caja=document.getElementById("micaja");
var caja=document.querySelector("#micaja");

caja.innerHTML="texto en la caja desde js";
caja.style.background="red";
caja.style.padding="20px";
caja.style.color="white";
caja.className="hola";

console.log(caja);

var todoslosdivs=document.getElementsByTagName('div');
var seccion=document.querySelector("#miseccion")
var hr=document.createElement("hr");

var valor;
// todoslosdivs.forEach((valor,indice) => {
for(valor in todoslosdivs){
    
    if(typeof todoslosdivs[valor].textContent=="string"){
    var parrafo= document.createElement("p");
    var texto= document.createTextNode(todoslosdivs[valor].textContent);
     parrafo.appendChild(texto); //parrafo.append(texto); anade despues
     document.querySelector("#miseccion").appendChild(parrafo); //seccion.prepend(parrafo); anade ante. si antes seccion=document.querySelector("#miseccion")
    }
}
// });

seccion.append(hr);

console.log(todoslosdivs);

// var contenido=todoslosdivs[2].textContent;
var contenido=todoslosdivs[2].innerHTML;

console.log(contenido);

var contenidoentexto=todoslosdivs[2];

contenidoentexto.style.background="blue";

contenidoentexto.innerHTML="otro texto para el segundo elemento";

console.log(contenidoentexto);


var divsrojos= document.getElementsByClassName('rojo');
divsrojos[1].style.background="green";
console.log(divsrojos);

var div;

for( div in divsrojos){
    if(divsrojos[div].className=="rojo"){
    divsrojos[div].style.background="red";}
}

console.log(divsrojos);

var id=document.querySelector("#encabezado");
console.log(id);

// Para seleccionar muchos elementos existe el método querySelectorAll, te dejo una referencia por aquí:

// https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll