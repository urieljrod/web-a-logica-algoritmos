
// let cuentaatras = (num) => {

//     debugger

//     if (num === 0) {
//         return
//     }

//     console.log(num)

//     return cuentaatras(num-1)

//     }

//     console.log(cuentaatras(5))

// function factorial(num) {

//     if (num === 0) {
//         return 1
//     }

//     return num * factorial(num-1)

// }
// console.log(factorial(5))

// function ParImpar(n) {

//     if (n === 0) return "par"
//     if (n === 1) return "impar"

//     return ParImpar(n - 2)
// }

// console.log(ParImpar(22))

// function invertirString (str) {
//     debugger

//     if (str.length <= 1) return str

//     return str[str.length-1] + invertirString(str.slice(0, str.length-1))

// }
// console.log(invertirString("hola"))

// let programa = (cadena, letra, index = 0, count = 0) => {

//     if (index === cadena.length) return count;
//     if (cadena[index] === letra) count++;

//     return programa(cadena, letra, index + 1, count);
// }

// console.log(programa("JavaScript", "a"))

function permute(str, path = "", result = []) {
    if (str.length === 0) {
        result.push(path);
    } else {
        for (let i = 0; i < str.length; i++) {
            const remaining = str.slice(0, i) + str.slice(i + 1);
            console.log(remaining, path + str[i], result);
        }
    }
    return result;
}

const result = permute("abc");
console.log(result);