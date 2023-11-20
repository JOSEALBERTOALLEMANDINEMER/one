'use strict'

window.addEventListener('load', function(){



if (typeof(Storage)!=='undefined') {

    console.log("local storage disponible");
    
}else{console.log("local storage no disponible");}


localStorage.setItem("titulo","curso de symfony");


localStorage.getItem("titulo");

console.log(localStorage.getItem("titulo"));

document.querySelector("#peliculas").innerHTML= localStorage.getItem("titulo");


var usuario={

    nombre:"jose",
    mail:"nurnurvn",
    web:"gfgfgfg"
};

localStorage.setItem("usuario", JSON.stringify(usuario));


var userjs=JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#peliculas").append(userjs.web);
document.querySelector("#datos").append(userjs.web);

this.localStorage.removeItem("usuario");

this.localStorage.clear();








});