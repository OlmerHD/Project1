/*
C Treboles
D Diamantes
H Corazones
S espadas
*/ 


let deck         = [];
const tipos      = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

/*For para mostrar cartas*/
const crearDeck = () => {

    for(let i = 2; i <= 10; i++) {
        for(let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for(let tipo of tipos) {
        for(let esp of especiales) {
            deck.push(esp + tipo);
        }
    }
/*se llama libreria underscore con funcionalidades como shuffle para para reordenar elementos*/ 
/*la libreria esta en underscore-min.js*/

    deck = _.shuffle(deck);
    console.log(deck);
    return deck;

}

crearDeck();


//Esta funcion permite tomar una carta 
const pedirCarta = () => {

    if (deck === 0) {
        throw 'No hay mas cartas';
    }

    const carta = deck.pop();

    console.log(carta);
    console.log(deck);
    return carta;

}

//pedirCarta();


const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
            (valor === 'A') ? 11 : 10
            : valor * 1;

}

console.log(valorCarta(pedirCarta())); 
