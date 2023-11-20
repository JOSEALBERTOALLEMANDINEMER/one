'use strict'

$(document).ready(function(){

    console.log("estamos listos!");
});


jQuery(document).ready(function(){



reloadlinks();


$('#add_button')

    .removeAttr('disabled')
    .click(function(index){


    // $('#menu').html('<li><a href="'+$("#add_link").val()+'"></a></li>');
    // reloadlinks();
    // $('#menu').before('<li><a href="'+$("#add_link").val()+'"></a></li>');
    // reloadlinks();
    $('#menu').append('<li><a href="'+$("#add_link").val()+'"></a></li>');
   
    $("#add_link").val('');
    reloadlinks();
});

function reloadlinks(){

    $('a').each(function(index){

        var th=$(this);
        
        console.log($('a').length);
        
        console.log(this);
        
        var enlace=th.attr('href');

        th.attr('target','_blank');
        
        
        console.log(enlace);
        
        th.text(enlace);
        
        });
    
}




});