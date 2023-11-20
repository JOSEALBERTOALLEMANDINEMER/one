'use strict'

alert("buenas");

function listadofrutas(fruta1,fruta2,fruta3,...resto){

    console.log("fruta1:", fruta1);
    console.log("fruta2:", fruta2);
    console.log("fruta3:", fruta3);
    console.log("resto:", resto);


}

listadofrutas("manzana","coco","tomate","melon","sandia");

var frutas=["naranjas","peras"]
listadofrutas(frutas,"manzana","coco","tomate","melon","sandia");
listadofrutas(...frutas,"manzana","coco","tomate","melon","sandia");