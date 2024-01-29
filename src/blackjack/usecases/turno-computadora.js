import { pedirCarta, determinarGanador, acumularPuntos, crearCarta } from "./";

/**
 * Turno de la computadora
 * @param {Number} puntosMinimos  puntos mínimos que la computadora necesita para ganar
 * @param {Array<String>} deck 
 */
export const turnoComputadora = (puntosJugadores, deck = [], puntosHTML, divCartasJugadores) => {

    if(!puntosJugadores || puntosJugadores.length < 1) throw new Error('Puntos jugadores son necesarios');
    if(!puntosHTML) throw new Error ('puntosJugadores es obligatorio');    
    if(!divCartasJugadores) throw new Error ('puntosJugadores es obligatorio');    

    let puntosMinimos = puntosJugadores[0];
    let puntosComputadora = 0;
    do{
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length -1, puntosJugadores, puntosHTML);
        crearCarta(carta, puntosJugadores.length -1, divCartasJugadores );
    }while((puntosComputadora < puntosMinimos) && (puntosMinimos <=21));

    determinarGanador(puntosJugadores);
};