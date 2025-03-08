
// 19. Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza
// Promise.allSettled() para obtener información sobre el estado de todas las Promises.


function crearPromesa(nombre, tiempo, debeRechazar = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (debeRechazar) {
                reject(`Promesa ${nombre} rechazada`)
            } else {
                resolve(`Promesa ${nombre} resuelta`)
            }
        }, tiempo)
    })
}


let promesa1 = crearPromesa('A', 1000)  // se resuelve 
let promesa2 = crearPromesa('B', 2000, true)  // se rechaza 
let promesa3 = crearPromesa('C', 1500)  // se resuelve 

Promise.allSettled([promesa1, promesa2, promesa3])
    .then(resultados => {
        console.log('Resultados de las promesas:')
        resultados.forEach((resultado, i) => {
            if (resultado.status === 'fulfilled') {
                console.log(`Promesa ${i + 1}: éxito → ${resultado.value}`)
            } else {
                console.log(`Promesa ${i + 1}: error → ${resultado.reason}`)
            }
        })
    })
