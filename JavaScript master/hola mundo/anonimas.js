'use strict'

alert("sin nombre");

var pelicula= function(nombre){
    return "la pelicula es; " + nombre;

}

// function sumame(n1,n2) {

//     var sumar= n1+n2;

//     return sumar;
    
// }

// console.log(sumame(4,5));


// function sumame(n1,n2,sumaymuestra, sumapordos) {

//     var sumar= n1+n2;

//     sumaymuestra(sumar);
//     sumapordos(sumar);

//     return sumar;
    
// }

// sumame(5,7,function(dato){console.log("la suma es; ", dato);},function(dato){console.log("la suma por dos es; ", (dato*2));});


function sumame(n1,n2,sumaymuestra, sumapordos) {

    var sumar= n1+n2;

    sumaymuestra(sumar);
    sumapordos(sumar);

    return sumar;
    
}

sumame(5,7,dato=>{console.log("la suma es; ", dato);},function(dato){console.log("la suma por dos es; ", (dato*2));});