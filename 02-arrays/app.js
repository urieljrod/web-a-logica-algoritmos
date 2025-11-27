
let frutas = ['limón', 'mango', 'fresa']


// console.log(frutas)
// frutas.push('banano')
// console.log(frutas)
// frutas.unshift('coco')
// console.log(frutas)


// console.log(personajes)
// console.log(personajes[1])
// personajes[1] = "Jerry"
// console.log(personajes[1])

// let perro = {
//     nombre: 'Robert',
//     ladrar: () => {
//         return 'Woof Woof'
//     }}

//map
const personajes = ["Rick", "Morty", "Beth"]

personajes.map( char => {
    console.log(char + "🎅")
} )

//sort

const numeros = [42, 7, 19, 3, 88, 15, 60, 1, 27, 54];
let numerosOrdenados = numeros.sort( (a, b) => a - b );

console.log(numerosOrdenados)