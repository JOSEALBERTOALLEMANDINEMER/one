'use strict'

alert("holy");

var n1 = parseInt( prompt ("dame un n", 0));
console.log(n1);

var n2 = parseInt (prompt ("dame otro", 0));
console.log(n2);

while ( n1<=0 || n2<=0 || isNaN(n1) || isNaN(n2) ) {

    alert("vamos otra vez");

     n1 = parseInt( prompt ("dame un n", 0));
console.log(n1);

     n2 = parseInt (prompt ("dame otro", 0));
console.log(n2);
    
}

if (n1==n2) {

    console.log("son iguales");
    
}

else if (n1>n2) {

    console.log("n2 es mas pequeno");
    
    
}

else if (n1<n2) {

    console.log("n2 es mas grande");
    
    
}

else{console.log("se correcto");}