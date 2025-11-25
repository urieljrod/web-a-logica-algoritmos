//Divide and conquer
//Ejemplo 1: Sumar todos los números de un arreglo

function sumaDivideAndConquer(arr){

  //Caso base, cuando el arreglo tenga un elemento
  if(arr.length === 1){
    return arr[0]
  }

  //Dividir
  const medio = Math.floor( arr.length / 2 ) 
  const izquierda = arr.slice(0, medio)
  const derecha = arr.slice(medio)

  //Conquistar
  const sumaIzquierda = sumaDivideAndConquer(izquierda)
  const sumaDerecha = sumaDivideAndConquer(derecha)

  //Combinar
  return sumaIzquierda + sumaDerecha

}

//Caso 1: [1,2,3,4]
//console.log("Caso 1:", sumaDivideAndConquer([1,2,3,4]) ) 
//Caso 2: [38,27,43,3,9,82,10]
//console.log("Caso 2:", sumaDivideAndConquer([38,27,43,3,9,82,10]) )



//Ejemplo 2: Búsqueda binaria
function busquedaBinaria (arr, target, inicio = 0, fin = arr.length - 1){

  //Caso base 
  if(inicio > fin) return -1

  //Dividir
  const medio = Math.floor ( (inicio + fin) / 2 ) 

  if( arr[medio] === target ) return medio

  if( arr[medio] > target ){
    return busquedaBinaria( arr, target, inicio, medio - 1 )
  }else{
    return busquedaBinaria( arr, target, medio + 1, fin )
  }

}
console.log( busquedaBinaria( [1,3,5,7,9], 7 ) )

//Ejemplo 3: Cuantas veces aparece un núemero en un array

/* function encontrarNumeros (arr, numero){

  //Caso base 1: cuando el arreglo no tiene elementos internos
  if( arr.length === 0 ) return 0

  //Caso base 2: Si el arreglo tiene un solo elemento, lo comparamos con el target
  if( arr.length === 1 ) return arr[0] === numero ? 1 : 0

  //Dividir


  //Conquistar


  //Combinar (Llamado recursivo)

} */

//Solución 1: 

//Ejemplo 3: Cuantas veces aparece un núemero en un array
/* function encontrarNumeros (arr, numero){
  //Caso base 1: cuando el arreglo no tiene elementos internos
    if( arr.length === 0 ) return 0
  //Caso base 2: Si el arreglo tiene un solo elemento, lo comparamos con el target
    if( arr.length === 1 ) return arr[0] === numero ? 1 : 0
  //Dividir
    const medio = Math.floor(arr.length/2);
    const left = arr.slice(0,medio);
    const right = arr.slice(medio);
  //Conquistar
    const a = encontrarNumeros(left,numero);
    const b = encontrarNumeros(right,numero);
    
  //Combinar (Llamado recursivo)
    return a + b
}
console.log(encontrarNumeros([ 1,2,3,5,5,5,6,9],5)); */



//Merge sort

function mergeSort(arr) {
    if (arr.length <= 1) return arr; // Caso base
    // Dividir
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    // Combinar
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    // Añadimos elementos restantes
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Ejemplo de uso

const array = [5, 2, 9, 1, 5, 6];

console.log(mergeSort(array)); // Salida: [1, 2, 5, 5, 6, 9]