
//Ejemplo de set
/* const numeros = [1,2,2,3,4,4,5]

const grupoNumeros = new Set(numeros)

console.log(grupoNumeros) */


// Ejemplo de Map
/* const cliente1 = {nombre: "pepe", id: 101}
const cliente2 = {nombre: "maria", id: 102}

const reserva = new Map()

reserva.set(cliente1, ["Piso 3 - Habitacion 305"])
reserva.set(cliente2, ["Piso 8 - Habitacion 805"])

console.log(reserva.get(cliente1)) */



//Algoritmo de los dos punteros:

//Buscar los pares de números que sumen una cantidad objetivo
/* let arr = [2, 7, 11, 15, 18]
let obj = 9

for (let i = 0; i < arr.length; i++) {
  for (let j = 1; j < arr.length; j++) {
    if(arr[i] + arr[j] === obj){
      console.log(`Par encontrado: ${arr[i]} + ${arr[j]} = ${obj}`)
    }
  }
} */

//Buscar los pares de números que sumen una cantidad objetivo

function sumaObjetivo(arr, target) {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    const suma = arr[left] + arr[right]

    if (suma === target) {
      return [arr[left], arr[right]]
    }

    if (suma < target) {
      left++
    } else {
      right--
    }

  }

  return null
}

let arr = [2, 7, 11, 15, 18] // [2,7]
let obj = 9

//console.log( sumaObjetivo(arr, obj) ) 

//Eliminar duplicados de un array

//[1,2,3,3,3,3,3]   // [1,2,3]

/* function eliminaDuplicado (arr){
  let slow = 0

  for (let fast = 1; fast < arr.length; fast++) {
    if(arr[slow] !== arr[fast]){
      slow++
      arr[slow] = arr[fast]
    } 
  }

  return arr.slice(0 , slow + 1)

}

console.log( eliminaDuplicado( [1,2,3,3,3,3,3,4,4,5,6,6] ) )  */

//Encuentra los Invitados que Pueden Sentarse Juntos
const invitados = ["Ana", "Carlos", "Carolina", "Cecilia", "Daniel", "Diana", "Eduardo"];
function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;
    while (siguiente < arr.length) {
        // Compara el actual con el siguiente
        if (arr[inicio][0] === arr[siguiente][0]) {
            return [arr[inicio], arr[siguiente]];
        }
        // Mueve ambos punteros para comparar el siguiente par consecutivo
        inicio++;
        siguiente++;
    }
    return null; // Si no se encuentra ningún par
}
console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"]