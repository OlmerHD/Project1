
//Primitivos se pasan por valor

let a = 10;
let b = a;

a = 30;

console.log({a, b});


//variable por referencia
//todos los objetos son pasados por referencia
//spread - slice

let juan = { nombre: 'Juan'};
let ana = {...juan};
ana.nombre = 'Ana';

console.log({juan, ana});

