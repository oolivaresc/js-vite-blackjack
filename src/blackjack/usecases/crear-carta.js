/**
 * Crea una carta en la pantalla
 * @param {String} carta carta seleccionada
 * @param {Number} turno turno del jugador
 * @param {HTMLElement} divCartasJugadores div en donde se pintará la carta
 */
export const crearCarta = (carta, turno, divCartasJugadores) => {
    if(!carta) throw new Error ('carta es obligatorio');    
    if(!turno) throw new Error ('turno es obligatorio');    
    if(!divCartasJugadores) throw new Error ('divCartasJugadores es obligatorio');    

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);
}