// 6. Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true

const numeros = [];
for (let index = 0; index < 5; index++) {
    numeros[index]=parseInt(prompt("ingresa un numero para el array: "))
}

function some(array, callback) {
    for (let i = 0; i < array.length; i++) { 
        if (callback(array[i])) { 
            return true; 
        }
    }
    return false; 
}



// callback que verifica si un numero es par
function esPar(num) {
    return num % 2 === 0;
}

const hayAlMenosUnPar = some(numeros, esPar);
console.log(hayAlMenosUnPar); // true (si hay al menos un numero par)
