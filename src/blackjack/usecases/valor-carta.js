/**
 * Blackjack J, Q, K valen 10 puntos, mientras que A 11
 * @param {String} carta Ejemplo: 2D
 * @returns {Number} retorna el valor de la carta expresada en número
 */
export const valorCarta = (carta) => {
    const valor = carta.substring(0,carta.length-1);
   
    return (isNaN(valor)) ? 
            (valor === 'A') ? 11 : 10 
            : valor * 1;
}