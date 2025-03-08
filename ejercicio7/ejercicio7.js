// 7. Crear una función find que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined

const numeros = [];
for (let index = 0; index < 5; index++) {
    numeros[index]=parseInt(prompt("ingresa un numero para el array: "))
}
function find(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) { // si el callback devuelve true 
            return array[i] // retornamos el primer elemento que cumple
        }
    }
    return undefined // si ninguno paso, retornamos undefined
}


// callback que verifica si un numero es par
function esPar(num) {
    return num % 2 === 0
}

const primerPar = find(numeros, esPar)
console.log(primerPar)
