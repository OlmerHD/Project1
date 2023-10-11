
//declaracion de funciones

function saludar() {
    console.log('Hola mundo');
}

saludar();


//Funcion anonima

const saludar2 = function() {
    console.log('Hola mundo 2');
}

saludar2();

//Paramtros - Argumentos

function saludar3(nombre) {
    console.log('Hola ' + nombre)
}

saludar3('Jose');

//Funcion Flecha

const saludarFlecha = () => {
    console.log('Funcion flecha');
}

saludarFlecha();

//Return

const sumar = (a, b) => {
    return a + b;
}

console.log( sumar(1,2) );

//Funcion flecha simplificada si solo tiene una linea de codigo como el anterior

const sumar2 = (a, b) => a + b;

console.log( sumar2(2,3) );




const numAleatorio = () => Math.random();

console.log( numAleatorio())