import {crearDeck, pedirCarta, turnoComputadora, acumularPuntos, crearCarta} from './usecases'
/*
* 2C = Two of clubs 
* 2D = Two of diamonds 
* 2H = Two of hearts 
* 2S = Two of spades 
*/

//Patron modulo
//(function(){
//    console.log('Hola');
//})()

const miModulo = (() => {
  'use strict';
  
  let deck = [];
  const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A','J','Q','K'];

  let puntosJugadores = [];

  //Referencias del HTML
  const btnNuevo= document.querySelector('#btnNuevo'),
        btnPedir = document.querySelector('#btnPedir'),
        btnDetener= document.querySelector('#btnDetener');

  const divCartasJugadores = document.querySelectorAll('.divCartas');
  const puntosHTML = document.querySelectorAll('small');


  const inicializarJuevo = (numJugadores = 2) => {
      deck = crearDeck(tipos, especiales);

      puntosJugadores= [];

      for(let i = 0; i<numJugadores; i++){
          puntosJugadores.push(0);
      }

      puntosHTML.forEach(elem => elem.innerText = 0);
      divCartasJugadores.forEach(elem => elem.innerHTML = '');

      btnPedir.disabled = false;
      btnDetener.disabled = false;
  };

  //Eventos
  btnPedir.addEventListener('click', () =>{
      const carta = pedirCarta(deck);
      let  puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);
      crearCarta(carta, 0, divCartasJugadores);

      if(puntosJugador > 21){
          console.warn('Lo siento mucho perdiste');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugadores, deck, puntosHTML, divCartasJugadores);
      }else if(puntosJugador === 21){
          console.warn('21, genial!!!');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugadores, deck, puntosHTML, divCartasJugadores);
      }
  });

  btnDetener.addEventListener('click', () =>{
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugadores, deck, puntosHTML, divCartasJugadores);
  });

  btnNuevo.addEventListener('click', () =>{
      inicializarJuevo();
  });

  return {
      nuevoJuego: Array
  };
})();