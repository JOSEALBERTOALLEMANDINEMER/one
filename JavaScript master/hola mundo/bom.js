'use strict'


function getbom(){console.log(window.innerHeight);  //console.log(screen.width);
    console.log(window.innerWidth);
    console.log(window.location);
    console.log(window.location.href);

}

function redirect(url){

     window.location.href = url;
}
getbom();

function abrirventana(url){

    window.open(url);
}

function abrirventanapequena(url){

    window.open(url,"","width-400,height-400");
}
