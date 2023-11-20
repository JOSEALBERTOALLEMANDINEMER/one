'use strict'

alert("hola");

var edad1= 30;
var edad2=12;

// != es distinto

if (edad1> edad2) {

    console.log("edad 1 mayor que 2");
    
}
else{
    console.log("la edad uno es inferior");

}

var nombre1="david";

if (edad1>= 18) {

    console.log(nombre1+" mayor de edad y tiene " +edad1+ " anos");

    if (edad1==30) {

        console.log("eres jose -1");
        
    }

    else if (edad1==33) {

        console.log("eres milleniam");
        
    }

    else{
           console.log("no eres millenian");
    }
    
}
else{
    console.log("menor de edad");

}

//  AND (y) &&
//    or (0) ||
//    negacion !

var year=2018;

if (year !=16) {

    console.log("el ano no es 2016 realmente es " + year);
    
}

if (year >= 2000 && year <= 2020) {
    console.log("estamos en la era actual");

    
}

else{
       console.log("estamos en otra era");
}

if (year == 2008  || (year>=2018 && year==2028)) {
    console.log("el ano acaba en 8");
    
}

else{ console.log("no registrado");}


