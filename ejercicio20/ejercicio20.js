// 20. Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
// lista de elementos uno por uno.

async function procesarElemento(elemento, tiempo) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Procesado: ${elemento}`)
            resolve(`Resultado de ${elemento}`)
        }, tiempo)
    })
}


async function procesarLista(lista) {
    for (let i = 0; i < lista.length; i++) {
        let resultado = await procesarElemento(lista[i], 1500) // espera 1.5 segundo por cada elemento
        console.log(`Resultado recibido: ${resultado}`)
    }
    console.log('Todos los elementos han sido procesados')
}


let elementos = ['arozz', 'papa', 'leche', 'huevos']


procesarLista(elementos)
