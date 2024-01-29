/**
 * Determina quién es el ganador
 * @param {Array[Number]} puntosJugadores puntos de los jugadores
 */
export const determinarGanador = (puntosJugadores) => {
    if(!puntosJugadores || puntosJugadores.length === 0) throw new Error ('puntosJugadores es obligatorio');    

    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout (()=>{
        if(puntosComputadora===puntosMinimos){
            alert('Nadie gana');
        }else if(puntosMinimos > 21){
            alert('Computadora gana');
        }else if(puntosComputadora > 21){
            alert('Jugador gana');
        }else{
            alert('Computadora gana');
        }
    }, 100);
}