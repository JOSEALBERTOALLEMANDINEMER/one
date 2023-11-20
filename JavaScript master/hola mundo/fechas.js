'use strict'

var fecha=new Date;
var year= fecha.getFullYear();
var mes=fecha.getMonth();
var dia=fecha.getDate();
var textohora= `

  El ano es: ${year}
  El mes es:${mes}
  El dia es:${dia}

`;

console.log(fecha);
console.log(textohora);

console.log(Math.random());
console.log(Math.ceil(Math.random()));