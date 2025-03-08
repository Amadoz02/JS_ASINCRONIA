//5. Crear una función every que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si todas las llamadas al callback devolvieron true

const numeros = [];
for (let index = 0; index < 5; index++) {
    numeros[index]=parseInt(prompt("ingresa un numero para el array: "))
    
}


function every(array, callback) {
    for (let i = 0; i < array.length; i++) { // Recorremos el array
        if (!callback(array[i])) { // Si el callback devuelve false en algun elemento
            return false; // Retornamos false inmediatamente
        }
    }
    return true; // Si todos pasaron la condicin retornamos true
}



// callback que verifica si un numero es par
function esPar(num) {
    return num % 2 === 0;
}

const todosSonPares = every(numeros, esPar);
console.log(todosSonPares); 
