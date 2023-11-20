
const txt = document.getElementById("resp")
async function obtenerData(){

    await fetch("http://127.0.0.1:5500/ARRAYS/data.json")
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error=>console.log('Solicitud fallida', error))



}

obtenerData();





/*async function obtenerData() {

    const response = await fetch("https://api.github.com/repositories/19438/commits")
    //const response = await fetch("http://127.0.0.1:5500/ARRAYS/data.json")
    const json = await response.text(); O BIEN .JSON Y DA TODO
    console.log(JSON.parse(json))
}
obtenerData();



/*

const respuesta= document.getElementById("resp")
const btnejecutar= document.getElementById("ejecuta")
btnejecutar.addEventListener('click',iniciar)
let frutas= ["manzana","mango","fresa","pera"]

function iniciar(){


    frutas.forEach(function(item,index,array){

        respuesta.innerText=array;
    });

    //respuesta.innerText=frutas[0]//length, [frutas.length-1]
}*/