
// bacticks ` ` se usan para almacenar strings con concatenacion

//ejercicio dias tienda

const dia = 0; // 0: Domingo, 1: Lunes ....
const horaActual = 7;

let horaApertura;
let mensaje; // Esta abierto, Esta cerrado, hoy abrimos alas XX


horaApertura = ( [0,6].includes(dia) ) ? 9 : 11;

mensaje = ( horaActual >= horaApertura ) ? 'Esta abierto' : `Esta cerrado, abrimos a las ${ horaApertura }`;

console.log({ horaApertura, mensaje });




//Ejercicio notas
//simplifica los IF

const nota = 85; //A+, A, B+
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';

console.log( {nota, grado} );