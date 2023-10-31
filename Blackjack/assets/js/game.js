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
    console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;

}

crearDeck();

