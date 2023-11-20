'use strict'


alert("gg");

function calculadora(){
    return "hola, soy yo";
    
}

console.log(calculadora());

function cal(n1,n2,mostrar=false){

    if (mostrar==false) {

        console.log("suuuuper suma:"+(n1+n2));
    console.log("suuuuper resta:"+(n1-n2));
    console.log("suuuuper division:"+(n1/n2));
    console.log("**************************************");
     return "nono, suuuuuuuuuuuuper!"
        
    }
    
    else{
    document.write("suuuuper suma:"+(n1+n2)+"<br/>");
    document.write("suuuuper resta:"+(n1-n2)+"<br/>");
    document.write("suuuuper division:"+(n1/n2)+"<br/>");
    document.write("**************************************");
     return "nono, suuuuuuuuuuuuper!"

    }
     
}
cal(5,10);
cal(1,2,true);
cal();

for (var i=0; i <= 10; i++) {
    console.log(i);
    cal(i,10);
    
}

var t= cal();
console.log(t);
