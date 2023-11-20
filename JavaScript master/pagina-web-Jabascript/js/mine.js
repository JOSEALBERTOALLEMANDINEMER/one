'use strict'

$(document).ready(function(){


    if(window.location.href.indexOf('index')>-1){

    $(function(){
        $('.bxslider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1200,
          pager:false///true
        });
      });

    }


var posts=[

 {title:'titulo1',
  date: new Date(),///moment().format("MMMM Do YYYY"), se puede separar y no va en el script pone guapa fecha
  content:"Las cinco vías de Santo Tomás de Aquino que demuestran la existencia de Dios son: 1) la simplicidad de la divina esencial, 2) la perfección de la divina esencial, 3) la infinidad de Dios, 4) la inmutabilidad de Dios y 5) la unidad de Dios. Estas vías han sido explicadas de una forma más propia para nuestra época, de la siguiente manera: 1.- Por la observación del movimiento de todas las cosas en el universo. 2.- Por la necesidad de una causa para todo lo que existe, porque nada puede darse (el «ser») sin haber sido. 3.- Por el orden que maravillosamente rige a todos los seres del universo. 4.- La vida, que no puede brotar de la materia muestra primitiva, necesita forzosamente de un vivificador. A partir de esto, se"
 },
 {title:'titulo2',
  date: new Date(),
  content:"Las cinco vías de Santo Tomás de Aquino que demuestran la existencia de Dios son: 1) la simplicidad de la divina esencial, 2) la perfección de la divina esencial, 3) la infinidad de Dios, 4) la inmutabilidad de Dios y 5) la unidad de Dios. Estas vías han sido explicadas de una forma más propia para nuestra época, de la siguiente manera: 1.- Por la observación del movimiento de todas las cosas en el universo. 2.- Por la necesidad de una causa para todo lo que existe, porque nada puede darse (el «ser») sin haber sido. 3.- Por el orden que maravillosamente rige a todos los seres del universo. 4.- La vida, que no puede brotar de la materia muestra primitiva, necesita forzosamente de un vivificador. A partir de esto, se"
 },
 {title:'titulo3',
  date: new Date(),
  content:"Las cinco vías de Santo Tomás de Aquino que demuestran la existencia de Dios son: 1) la simplicidad de la divina esencial, 2) la perfección de la divina esencial, 3) la infinidad de Dios, 4) la inmutabilidad de Dios y 5) la unidad de Dios. Estas vías han sido explicadas de una forma más propia para nuestra época, de la siguiente manera: 1.- Por la observación del movimiento de todas las cosas en el universo. 2.- Por la necesidad de una causa para todo lo que existe, porque nada puede darse (el «ser») sin haber sido. 3.- Por el orden que maravillosamente rige a todos los seres del universo. 4.- La vida, que no puede brotar de la materia muestra primitiva, necesita forzosamente de un vivificador. A partir de esto, se"
 },
 {title:'titulo4',
  date: new Date(),
  content:"Las cinco vías de Santo Tomás de Aquino que demuestran la existencia de Dios son: 1) la simplicidad de la divina esencial, 2) la perfección de la divina esencial, 3) la infinidad de Dios, 4) la inmutabilidad de Dios y 5) la unidad de Dios. Estas vías han sido explicadas de una forma más propia para nuestra época, de la siguiente manera: 1.- Por la observación del movimiento de todas las cosas en el universo. 2.- Por la necesidad de una causa para todo lo que existe, porque nada puede darse (el «ser») sin haber sido. 3.- Por el orden que maravillosamente rige a todos los seres del universo. 4.- La vida, que no puede brotar de la materia muestra primitiva, necesita forzosamente de un vivificador. A partir de esto, se"
 },
 {title:'titulo5',
  date: new Date(),
  content:"Las cinco vías de Santo Tomás de Aquino que demuestran la existencia de Dios son: 1) la simplicidad de la divina esencial, 2) la perfección de la divina esencial, 3) la infinidad de Dios, 4) la inmutabilidad de Dios y 5) la unidad de Dios. Estas vías han sido explicadas de una forma más propia para nuestra época, de la siguiente manera: 1.- Por la observación del movimiento de todas las cosas en el universo. 2.- Por la necesidad de una causa para todo lo que existe, porque nada puede darse (el «ser») sin haber sido. 3.- Por el orden que maravillosamente rige a todos los seres del universo. 4.- La vida, que no puede brotar de la materia muestra primitiva, necesita forzosamente de un vivificador. A partir de esto, se"
 },




]

console.log(posts);

posts.forEach((item,index )=>{

     var post=`

     <article class="post">

     <h2>${item.title}</h2>
     <span class="date">${item.date}</span>
     <p>

          ${item.content}


     </p>

     <a href="#" class="button-more">Leer mas</a>

 </article>
     
     `;

     console.log(post);
     $("#posts").append(post);
});




var theme=$("#theme");
// var cc=$(".bxslider");

$("#to-green").click(function(){

        theme.attr("href","css/green.css");
        // cc.attr("src","img/hojas.jpg");
});

$("#to-red").click(function(){

    theme.attr("href","css/red.css");
});
$("#to-blue").click(function(){

    theme.attr("href","css/blue.css");
});



$('.subir').click(function(){

    e.preventDefault();
// no nos lleva a ningun sitio

    $('html,body').animate({
        scrollTop:0
    }, 500);
});


$("#login form").submit(function(){

     var form_name= $("#form_name").val();

     localStorage.setItem("form_name",form_name);
});

var form_name=localStorage.getItem("form_name");

if (form_name !=null && form_name !="undefined") {
    
    var about_parrafo=$("#about p");
    about_parrafo.html("<br><strong> welcome: "+form_name+ "</strong>");
    about_parrafo.append("<a href='#' id='logout'><br>cerrar secion</a>");

$("#login").hide();

$("#logout").click(function(){

      localStorage.clear();
      location.reload();
});
}


















});