'use strict'

window.addEventListener('load', function(){

    console.log("Dom cargado!");

    var formulario=document.querySelector("#formulario");
    var box_dashed=document.querySelector(".dashed");
    box_dashed.style.display= "none";

    formulario.addEventListener('submit', function(){

        console.log("evento submit capturado");

        var nombre= document.querySelector("#nombre").value;
        var apellidos= document.querySelector("#apellidos").value;
        var edad = parseInt( document.querySelector("#edad").value);
        
        if (nombre.trim()==null || nombre.trim().length==0 ) {

              document.querySelector("#errornombre").innerHTML="el nombre no es valido";
              alert("el nombre no es valido");
              return false;
        }else{document.querySelector("#errornombre").style.display="none";}

        if (apellidos.trim()==null || apellidos.trim().length==0 ) {
            alert("el apellido no es valido");
            return false;
      }

      if (edad==null || edad<=0  || isNaN(edad)) {
        // ! ==false
        alert("edad no es valido");
        return false;
  }


        box_dashed.style.display= "block";

        var datosusuario=[nombre,apellidos,edad]

        var indice;
        for(indice in datosusuario){

            var parrafo= document.createElement("p");
            parrafo.append(datosusuario[indice]);
            box_dashed.append(parrafo);

        }

   
    });




});

