'use strict'

alert("yooo");

var usuarios=[];

var div_usuarios=document.querySelector("#usuarios");

fetch('https://jsonplaceholder.typicode.com/users')

    .then(data=>data.json())

    .then(data=>{

        usuarios=data;
        console.log(usuarios);


        usuarios.map((user,i)=>{

            let nombre=document.createElement('h2');
            nombre.innerHTML=i+user.first_name+" "+user.last_name;


                 div_usuarios.appendChild(nombre);

                 document.querySelector(".loading").style.display='none';
        });


     });






