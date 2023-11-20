'use strict'
alert("holi");
var edad=40;
var imprime="";

switch (edad) {
    case 18:

    imprime="mayor de edad";
        
        break;

        case 25:

        imprime="mayor de edad y adulto";
            
            break;  
            
            case 40:

            imprime="mayor de edad y en crisis";
                
                break;     

    default:
        imprime="tu edad es neutra";
        break;
}

console.log(imprime);