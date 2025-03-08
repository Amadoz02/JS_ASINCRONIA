// 3. Crear una función map que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • obtenga el resultado
// • lo pushee a un nuevo array
// • devuelva el array final con el resultado de cada una de las llamadas al callback.

// Solución:
 

let nombres = ["helder", "felipe", "amado"];
console.log(nombres);

let callback = (nombre) => {
    return nombre.toUpperCase();
};

let map = (array, callback) => {
    let result = [];
    for(let i=0; i<array.length; i++){//recorrer el array
        result.push(callback(array[i]));// llamar al callback y añadir el resultado al nuevo array  
    }
    return result;
}



console.log(callback); // ["HELDER", "FELIPE", "AMADO"]
