

const txtn1= document.getElementById("n1")
//querySelector"#n1" //
const txtn2= document.getElementById("n2")
const respuesta= document.getElementById("resp")
const btncalcular= document.getElementById("calcular")


btncalcular.addEventListener('click', calcular)

function calcular(){

    const op1=parseFloat (txtn1.value)
    const op2=parseFloat (txtn2.value)
    let res= op1+op2
    respuesta.innerText= res
    respuesta.style="color:blue"
}



















/*console.log("hola mundo");
var variable = true
console.log(variable)
const constante = 5
console.log(constante)
variable = false
console.log(variable)
//constante= 5 /* math.pow (,) alt z para que entre todo ** 
console.log(constante)
var numero1 = 5
var numero2 = 6
var respuesta = numero1 + numero2
console.log("la respuesta es " + respuesta)
var respuesta1 = numero1 == numero2
console.log(respuesta1)
var a = 0
a = a + 5
a -= 5
a *= 5
console.log(a)
var num = 8
if (num == 7) { console.log("si es 7") }
else if (num == 8) { console.log("es igual a 8") }
else { console.log("no es 7") }
var i = 0
while (i < 10) {
    i += 1 //ponlo debajo y llega a 9
    console.log(i)
}


for (var o = 0; o <= 10; o += 1) { console.log(o) }


var resultado = "capuchino"
function cafetera(ingrediente1, ingrediente2) 
{ if (ingrediente1 == "leche" && ingrediente2 == "cafe") { return resultado } } 
var tasa=cafetera("leche","cafe")
console.log(tasa)
/*var resultado = "capuchino"
function cafetera(ingrediente1) 
{ if (ingrediente1 == "leche") { 
    var resultado="otra cosa"
    var resultado="otra cosa 2"
    return resultado } } 
var tasa=cafetera("leche")
console.log(tasa)*/








