/*
C Treboles
D Diamantes
H Corazones
S espadas
*/ 


//modo estricto 


(() => {

    //modo estricto - proteger codigo
    'use strict'



    let deck         = [];
    const tipos      = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugador = 0,
        puntosCpu = 0;



    //Referencias del HTML
    const btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo = document.querySelector('#btnNuevo');

    const puntosHTML = document.querySelectorAll('small'),
          divCartasJugador = document.querySelector('#jugador-cartas'),
          divCartasCPU = document.querySelector('#computadora-cartas');

    //Esta funcion inicializa el juego
    const inicializarJuego = () => {
            crearDeck();
        };


    /*For para mostrar cartas*/
    const crearDeck = () => {

        deck = []; // Reiniciando deck

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

        return _.shuffle(deck);

    }
    

    //Esta funcion permite tomar una carta 
    const pedirCarta = () => {

        if (deck === 0) {
            throw 'No hay mas cartas';
        }

        return deck.pop();
    }

    //pedirCarta();
    //funcion para obtener el valor de la carta
    const valorCarta = (carta) => {

        const valor = carta.substring(0, carta.length - 1);
        return (isNaN(valor)) ?
                (valor === 'A') ? 11 : 10
                : valor * 1;

    }

    //Turno CPU
    const turnoCPU = (puntosMinimos) => {

        do {

            const carta = pedirCarta();
            puntosCpu = puntosCpu + valorCarta(carta);
            puntosHTML[1].innerText = puntosCpu;

            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${ carta }.png`;
            imgCarta.classList.add('carta');
            divCartasCPU.append(imgCarta);

            if (puntosMinimos > 21) {
                break;
            }

        } while( (puntosCpu < puntosMinimos) && (puntosMinimos <= 21));


        setTimeout(() => {

            if (puntosCpu === puntosMinimos) {
                alert('Nadie gana :()');
            } else if (puntosMinimos > 21) {
                alert('CPU gana');
            } else if (puntosCpu > 21) {
                alert('Jugador gana');
            } else {
                alert('CPU gana');
            }
        
        }, 20);
    }



    //Eventos
    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta();
        puntosJugador = puntosJugador + valorCarta(carta);
        puntosHTML[0].innerText = puntosJugador;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasJugador.append(imgCarta);

        if (puntosJugador > 21) {
            console.log('Lo siento, CPU gana');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoCPU(puntosJugador);
        } else if (puntosJugador === 21) {
            console.log('21, ganaste');
            btnDetener.disabled = true;
        }

    });


    btnDetener.addEventListener('click', () => {
        btnDetener.disabled = true;
        btnPedir.disabled = true;
        turnoCPU(puntosJugador);
    })


    btnNuevo.addEventListener('click', () => {

        console.clear();
        inicializarJuego();

        //deck = [];
        //deck = crearDeck();

        puntosJugador = 0;
        puntosCpu = 0;

        puntosHTML[0].innerText = 0;
        puntosHTML[1].innerText = 0;

        divCartasJugador.innerHTML = '';
        divCartasCPU.innerHTML = '';

        btnDetener.disabled = false;
        btnPedir.disabled = false;
        
    })

})();

