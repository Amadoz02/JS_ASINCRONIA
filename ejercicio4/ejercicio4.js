// 4. Crear una función filter que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • sí dicho callback devuelve true, pushea el elemento a un nuevo array
// • devuelva el array final con los elementos que pasaron el "filtro".

function filter(array, callback) {
    let result = []; 

    for (let i = 0; i < array.length; i++) { 
        if (callback(array[i])) { 
            result.push(array[i]); 
        }
    }
    return result;
}

const numeros = [1, 2, 3, 4, 5, 6];

// callback que filtra los números pares
function esPar(num) {
    return num % 2 === 0;
}

const numerosPares = filter(numeros, esPar);
console.log(numerosPares); 
