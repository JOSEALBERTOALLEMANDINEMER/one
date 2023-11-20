'use strict'

//var boton = document.querySelector("#boton");

function cambiacolor(){

    console.log("click");

    var bg=boton.style.background;
    if( bg=="green"){
        boton.style.padding="10px";
        boton.style.border="1px solid #ccc";
    boton.style.background="red";}

    else{
        boton.style.padding="10px";
        boton.style.border="1px solid #ccc";
        
        boton.style.background="green";}

    return true;
}

var boton = document.querySelector("#boton");

boton.addEventListener('click', function(){cambiacolor();
console.log(this);
    this.style.border="10px solid black";

});

boton.addEventListener('mouseover', function(){boton.style.background='#ccc';});

boton.addEventListener('mouseout', function(){boton.style.background='black';});


var input= document.querySelector("#camponombre");

input.addEventListener('focus', function(){console.log("[focus]estas en el imput");});

input.addEventListener('blur', function(){console.log("[blur]estas fuera del imput");});

input.addEventListener('keydown', function(event){
    console.log("has escrito esto=  " + String.fromCharCode(event.keyCode));
   
});

input.addEventListener('keypress', function(event){
    console.log("tecla presionada=  " + String.fromCharCode(event.keyCode));
   
});

input.addEventListener('keyup', function(event){
    console.log("tecla soltada=  " + String.fromCharCode(event.keyCode));
   
});

// window.addEventListener('load',function(){}); esto es igual a window.addEventListener('load',()=>{});

// dentro de esto se puede meter todo el codigo de javascript asi no hay que cargar el script al final del html



