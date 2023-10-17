
let a = 10;

if ( a >= 10) {
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

// = el igual es asignacion y no se debe usar en condicionales

const hoy = new Date();
let dia = hoy.getDay();

console.log({dia});

if (dia === 0) {
    console.log('Domingo');
} else {
    console.log('No es domingo');
}


// 


let diaprueba = 3

const diasLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
}

console.log(diasLetras[diaprueba]);


//

const diasLetras2 = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado',];

console.log(diasLetras2[diaprueba]);