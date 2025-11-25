

//  const array = [10, 16, 3, 5, 40, 17, 26]
//  const k = 3

//  function sumamaxima(arr, k) {
//     debugger
//     let izquierda = 0
//     let derecha = izquierda + k - 1

    // for (let index = izquierda; index <= derecha; index++) {
    //     suma += arr[index]
    // }
    // let ventanainicial = arr.slice(0, derecha + 1)
    // let sumainicial = ventanainicial.reduce((acc, value) => acc + value)
    // let sumamaxima = sumainicial
    // console.log(sumainicial)

//     for (let i = k; i < arr.length; i++) {
//         sumainicial += arr[i] - arr[i - k]
//         sumamaxima = sumamaxima > sumainicial ? sumamaxima : sumainicial
        
//     }
//     return sumamaxima
// }

// console.log(sumamaxima(array, k))

const array2 = [2, 3, 1, 2, 4, 3]
const k = 7

function ventanavariable(arr, target) {

    let sumaactual = 0
    let inicio = 0
    let longitudminima = Infinity;
    
    for (let fin = 0; fin < arr.length; fin++) {
        sumaactual += arr[fin];

        while (sumaactual >= target){
            longitudminima = Math.min(longitudminima, fin - inicio + 1);
            sumaactual -= arr[inicio];
            inicio++;
        }
    }
    return longitudminima === Infinity ? 0 : longitudminima;
}
console.log(ventanavariable([2, 3, 1, 2, 4, 3], 7))