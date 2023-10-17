
const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}






console.warn('Not o la negación');
console.log(true); // true
console.log(!true); // false
console.log(!false); // true

console.log(!regresaFalse()); //true



console.warn('AND'); // true si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && !false); // true


console.log('==========');
console.log(regresaFalse() && regresaTrue()); //false
console.log(regresaTrue() && regresaFalse()); //false

console.log('==== && ====');
regresaFalse() && regresaTrue();



console.warn('OR'); // true si cumple una condicion
console.log(true || false);




