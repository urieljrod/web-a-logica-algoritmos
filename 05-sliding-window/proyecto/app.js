
function palabraMasLarga(texto) {
    const palabras = texto.split(' ');
    let longestWord = "";       
    let inicio = 0;             
    for (let i = 0; i < palabras.length; i++) {
        
        
        const palabraActual = palabras[i];
        if (palabraActual.length > longestWord.length) {
            longestWord = palabraActual;
        }
    }
    return longestWord;
}
const texto = "JavaScript es un lenguaje de programación increíble para aprender";
console.log(palabraMasLarga(texto));  
