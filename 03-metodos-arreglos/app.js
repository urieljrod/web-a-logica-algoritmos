
//reduce()
//Ejemplo 1: Calcular el promedio de calificaciones

/* const calificaciones = [4.5, 3.2, 5.0, 4.0, 3.8]

const promedio = calificaciones.reduce((acc, nota) => acc + nota, 0) / calificaciones.length

console.log(promedio) */


//Ejemplo 2: Calcular factorial de un número 

/* function factorial(n) {
  if (n < 0) return undefined;       // El factorial no está definido para negativos
  if (n === 0) return 1;             // 0! = 1

  return Array.from({ length: n }, (_, i) => i + 1)
    .reduce((acc, val) => acc * val, 1);
}

console.log(factorial(5)); // 120 */


//every()
//Ejemplo 1: Verificar que todos sean mayores de 18

/* const edades = [ 22, 30, 19, 25 ]
const todosMayores = edades.every( edad => edad >= 18 )
console.log( todosMayores ) */

//Ejemplo 2: Verificar que todas las palabras tengan más de 3 letras

/* const palabras = ["perro","celular","sol","casa","mesa"]
const largoPalabras = palabras.every( palabra => palabra.length > 3 )
console.log(largoPalabras) */


//includes()
/* const frutas = [ "234b2", "244b2", "334C2", "b64b2" ]
const existeManzana = frutas.includes("234b2") 
console.log(existeManzana) */


// some()
//Ejemplo 1: Verificar si almenos un número es negativo
/* const numeros = [ 3, 7, 28, 33, 8 ]
const hayNegativo = numeros.some( num => num < 0 )

if(hayNegativo){
  console.log("Tienes registros negativos")
}else{
  console.log("Todos tus registros son positivos")
} */

//Ejemplo 2: Verificar si al menos una palabra contiene más de 8 caracteres

/* const palabras = ["perro","celular","sol","casa","mesa","compu"]
const largoPalabra = palabras.some( pal => pal.length > 8 )
if(largoPalabra){
  console.log("Tienes palabras con más de 8 caracteres")
}else{
  console.log("Todas tus palabras tienen menos de 8 caracteres ✅")
} */


//Ejemplo objetos: imprimir las materias de un estudiante

/* let estudiante = {
  nombre: "Ana",
  calificaciones: [],
  materias: ["Matemáticas", "Historia", "Ciencias"],
  agregarMateria: (mat) => {
    return this.materia.push(mat)
  }
} */
//Agregar: 
//Método para imprimir todas las materias
//Método para sacar promedio de notas
//Método que cuente las materias registradas
//Método para eliminar materia filter()

//Tus materias son: Matemáticas, Historia, Ciencias
//El enunciado lo creamos con join()

/* estudiante.materias.forEach((element, index) => {
  console.log( index+1, element )
}) */

/* let mensaje = "Tus materias son: " + estudiante.materias.join(", ")
console.log(mensaje) */


//Resolución: 

/* let estudiante = {
  nombre: "Ana",
  calificaciones: [18, 20, 15, 19],
  materias: ["Matemáticas", "Historia", "Ciencias"],
  // Agregar materia
  agregarMateria: function(materiaNueva) {
    this.materias.push(materiaNueva);
  },
  // Método 1: Imprimir todas las materias
  imprimirMaterias: function () {
    console.log("Materias registradas:");
    this.materias.forEach(m => console.log("- " + m));
  },
  // Método 2: Sacar promedio de notas
  promedioNotas: function () {
  if (this.calificaciones.length === 0) return 0;
  const suma = this.calificaciones.reduce((acc, nota) => acc + nota, 0);
  return suma / this.calificaciones.length;
},
  // Método 3: Contar materias registradas
  contarMaterias: function () {
    return this.materias.length;
  },
  // Método 4: Eliminar materia con filter()
  eliminarMateria: function (materiaAEliminar) {
    this.materias = this.materias.filter(m => m !== materiaAEliminar);
  }
}; */

// ---------------------------
// EJEMPLOS DE USO
// ---------------------------
// estudiante.imprimirMaterias();
//console.log("Promedio:", estudiante.promedioNotas());
//console.log("Total de materias:", estudiante.contarMaterias());
//estudiante.eliminarMateria("Historia");
//estudiante.imprimirMaterias();





/* ------ */

/* let estudiante = {
    nombre: "Ana",
    calificaciones: [],
    materias: ["Matemáticas", "Historia", "Ciencias", "Arte"],

    agregarMateria(mat) {
        this.materias.push(mat);
    },

    imprimirMaterias() {
        let mensaje = "Tus materias son: " + this.materias.join(", "); 
        console.log(mensaje);
        return mensaje
        //        console.log(mensaje);
    },

    promedioNotas() {
        let suma = this.calificaciones.reduce((a, b) => a + b, 0);
        return suma / this.calificaciones.length;
    },

    cuantasMaterias() {
        return this.materias.length;
    },

    eliminarMateria(mat) {
        this.materias = this.materias.filter(m => m !== mat); 
    }

}  */

/* const productos = [
  { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
  { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
  { nombre: "Libro", precio: 12, categoria: "Educación" },
  { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
  { nombre: "Celular", precio: 600, categoria: "Electrónica" },
]; */

let tienda = {
  productos: [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
  ],
  productosBaratos: () => {
    return this.productos.filter()
  }
}

console.log(productos.filter(p => p.precio < 100))