'use strict'

$(document).ready(function(){

    console.log("estamos listos!");
});

jQuery(document).ready(function(){

    console.log("estamos listos!");
});

jQuery(document).ready(function(){

var rojo=$("#rojo").css("background","red")
                    .css("color","white")

 var amarillo=$("#amarillo").css("background","yellow")
                    .css("color","white")  

$("#verde").css("background","green")
                    .css("color","white")                   
                    
                    
console.log(rojo);



var clase=$('.zebra').css("padding","5px");

console.log(clase);
console.log(clase[1]);
console.log(clase.eq(1));

clase.css("border","5px dashed black");


$(".sinborde").click(function(){
    console.log("click!");
     $(this).addClass('zebra');
});



 var parrafos=$('p').css("cursor","pointer");

 parrafos.click(function(){

    var thi=$(this);

   if(!thi.hasClass('grande')){

    // $(this).removeClass("zebra");
    thi.addClass('grande');
   }else{thi.removeClass('grande');}

  

 });



  $('[  title="ir"   ]').css('background','#ccc');
  $('[  title="ir1"   ]').css('background','blue');
  $('[  title="ir2"   ]').css('background','red');




   $('p,a').addClass('margen-superior');

   var busqueda=$("#caja").find('.resaltado');

//    var busqueda=$("#caja.resaltado");

// var busqueda=$("#caja.resaltado").eq(0).parent().parent().parent().find('[title="google"]');

   console.log(busqueda);























});

