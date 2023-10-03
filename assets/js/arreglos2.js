//mas detalle de arreglos
//algunos metodos 

//longitud
let juegos = ['Mario', 'Resident', 'Fifa', 'Zelda', 'PES'];
console.log(juegos.length);

//posiciones
let primero = juegos[0];
let ultimo = juegos[juegos.length-1];

//foreach para recorrer elementos--falta profundizar más
juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

//insertar un nuevo elemento al final del arreglo
juegos.push('Mortal combat');

//insertar un nuevo elemento al principio del arreglo
juegos.unshift('Fire');

//borrar el ultimo elemento del arreglo
juegos.pop();

//borrar un elemento en una posición específica
let pos = 1
juegos.splice(pos, 1);

//conocer la posición de un elemento
let nombreVariable = juegos.indexOf('Fifa');