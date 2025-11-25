import { saludar, ladrar } from './funciones.js'

//console.log('Intro a ECMAScript')

//Symbol

//let result = Symbol('x') === Symbol('x')

//console.log(result)

//Ejemplo del Symbol
const ID_INTER = Symbol/('idInterno')

const usuario = {
    nombre: 'Uriel',
    edad: 22,
    [ID_INTER]: 12345 //Propiedad única
}

//console.log(usuario.ID_INTER)

//for (let key in usuario){
//    console.log(key)
//}

//Desestructuración de objetos
//const { nombre, edad } = usuario
//console.log(nombre, edad)

//console.log(saludar("Uriel"))
//console.log(ladrar())

//Ejemplo de Promesas
function cargarDatos() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true

            if (exito) {
                resolve('Datos cargados correctamente')
            } else {
                reject('Error al cargar los datos')
            }
        }, 4000)
    })
}
cargarDatos()
.then( (mensaje) => console.log(mensaje) )
.catch( (error) => console.log(error) )