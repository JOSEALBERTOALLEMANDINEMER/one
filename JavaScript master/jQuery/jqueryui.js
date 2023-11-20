'use strict'

$(document).ready(function(){

    console.log("estamos listos!");
});

jQuery(document).ready(function(){

    
$(".elemento").draggable();


$(".elemento").resizable();


// $(".lista").selectable();

$(".lista").sortable({

    update: function(event,ui){
        console.log("ha cambiado la lista");
    }
});


$("#elemento-movido").draggable();
$("#area").droppable({

    drop: function(){
        console.log("has soltado algo");
    }
});


$("#mostrar").click(function(){
        $(".caja-efecto").toggle("fade"); //explode,blind,slide,drop,fold,puff,escale,shake  ,"slow",4000,    
});




$(document).tooltip();

$("#lanzar-popup").click(function(){

    $(".popup").dialog();
});




$("#calendario").datepicker();



$("#pestanas").tabs();





});