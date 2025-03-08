// 8. Crear una función findIndex que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el índice del elemento pasado como argumento del primer callback que
// devuelva true
// • sí ningún callback devuelve true, devuelva undefined

const numeros = [];
for (let index = 0; index < 5; index++) {
    numeros[index]=parseInt(prompt("ingresa un numero para el array: "))
}

function findIndex(array, callback) {
    for (let i = 0; i < array.length; i++) { // recorremos el array
        if (callback(array[i])) { // si el callback devuelve true
            return i 
        }
    }
    return -1 // si ninguno paso la condición retornamos -1
}


// callback que verifica si un numero es par
function esPar(num) {
    return num % 2 === 0
}

const indicePrimerPar = findIndex(numeros, esPar)
console.log(indicePrimerPar) 

