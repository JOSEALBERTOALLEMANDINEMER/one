'use strict'

$(document).ready(function(){

    console.log("estamos listos!");
});

jQuery(document).ready(function(){

    console.log("estamos listos!");
});

jQuery(document).ready(function(){




// $("#datos").load("https://reqres.in/");



// $.get("https://reqres.in/api/users", {page:3}, function(response){
    $.get("https://reqres.in/api/users", function(response){

         console.log(response);
         response.data.forEach((element,index)=>{

                   $("#datos").append("<p>"+element.first_name+"<p/>");
         });
});



var usuario={


    name:"victor robles",
    web:"victorrobles.web"
};



$.post("https://reqres.in/api/users", usuario,function(response){
    console.log(response);
});


$("#formulario").submit(function(e){

    e.preventDefault();

          var usuario={
              name:$('input[name="name"]').val(),
              web:$('input[name="web"]').val()

          };
          console.log(usuario);

//           $.post("https://reqres.in/api/users", usuario,function(response){
//     console.log(response);

    
// }).done(function(){
//     alert("Usuario correcto");
// });


$.ajax({

    type: 'POST',
    url:$(this).attr("action"),
    data:usuario,
    beforeSend: function(){
           console.log("enviando usuario...");

    },

    success: function(response){
           console.log(response);
    },

    error: function(){

        console.log("error");
    },

    timeout:9000

});

return false;
});














});