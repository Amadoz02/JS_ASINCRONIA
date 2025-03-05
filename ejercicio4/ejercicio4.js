// 4. Crear una función filter que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • sí dicho callback devuelve true, pushea el elemento a un nuevo array
// • devuelva el array final con los elementos que pasaron el "filtro".

let nombres = ["Helder", "felipe", "amado", "felipe", "pedro", "juan", "ana", "juan"  ];
let nombres_filtro=[""];
let busqueda=prompt("Ingrese el nombre a buscar:");



let filtro = nombres.filter((nombre) => nombre == busqueda); //en este caso, solo se filtran los nombres que coinciden con la busqueda
 
callback=(filtro) => {
    if (true) {
        nombres_filtro.push(nombres);
    }
}

console.log(callback(filtro));  //esto muestra los nombres que coinciden con la busqueda

