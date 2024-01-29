import { valorCarta } from "./";

/**
 * Turno: = primer jugador y el último será computadora
 * @param {String} carta carta seleccionada
 * @param {Number} turno turno del gurador
 * @param {Array<String>} puntosJugadores arreglo de los puntos de los jugadores 
 * @param {HTMLElement} puntosHTML 
 * @returns retorna los puntos acumulados de un jugador
 */
export const acumularPuntos = (carta, turno, puntosJugadores, puntosHTML) =>{
    turno = null;
    if(!carta) throw new Error ('carta es obligatorio');    
    if(turno === undefined || turno == null) throw new Error ('turno es obligatorio');    
    if(!puntosJugadores || puntosJugadores.length === 0) throw new Error ('puntosJugadores es obligatorio');    
    if(!puntosHTML) throw new Error ('puntosHTML es obligatorio');    

    puntosJugadores[turno] = puntosJugadores[turno]  + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}