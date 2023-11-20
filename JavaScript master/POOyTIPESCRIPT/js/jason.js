
'use strict'


console.log("Po");


var bicicleta = {

   color:"rojo",
   modelo:'BMX',
   frenos:'de disco',
   velocidadmaxima:'230km/history',
   cambiarcolor: function(nuevocolor){
       this.color=nuevocolor;
       console.log(this);
    // bicicleta.color=nuevocolor
   }

};

bicicleta.cambiarcolor("azul");
console.log(bicicleta);




