'use strict'

$(document).ready(function(){

    console.log("estamos listos!");
});


jQuery(document).ready(function(){

var caja= $("#caja");

// caja.mouseover(function(){

//          $(this).css("background","red");
// });

// caja.mouseout(function(){

//        $(this).css("background","green")
// });

function cambiaRojo(){
    $(this).css("background","red");

}

function cambiaVojo(){
    $(this).css("background","green");
    
}


caja.hover(cambiaRojo,cambiaVojo);



caja.click(function(){
    $(this).css("background","blue")
            .css("color","white");
});

caja.dblclick(function(){
    $(this).css("background","pink")
            .css("color","yellow");
});

var nombre=$("#nombre");
var datos=$("#datos");

nombre.focus(function(){

    $(this).css("border","2px solid green");

});

nombre.blur(function(){

    $(this).css("border","2px solid transparent");
    
    datos.text($(this).val()).show();
});


datos.mousedown(function(){
      $(this).css("border-color","gray")
});

datos.mouseup(function(){
    $(this).css("border-color","black")
});

$(document).mousemove(function(){
       $('body').css("cursor","none");
     console.log("x; "+event.clientX);
     console.log("y; "+event.clientY);
     $("#sigueme").css("left", event.clientX);
     $("#sigueme").css("top", event.clientY);

    });   














});