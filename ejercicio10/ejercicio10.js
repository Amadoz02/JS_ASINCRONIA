// 10. La función incorporada setTimeout utiliza callbacks. Crea una alternativa basada en
// promesas.
// La función delay(ms) debería devolver una promesa. Esa promesa debería resolverse
// después de ms milisegundos, para que podamos agregarle. then

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

// pedir datos y simular un proceso con delay
async function pedirDatos() {
    let cantidad = parseInt(prompt('cuantos numeros quieres ingresar: '))
    let numeros = []

    for (let i = 0; i < cantidad; i++) {
        let num = parseInt(prompt(`ingresa el numero ${i + 1}`))
        numeros.push(num)
    }

    console.log('procesando datos... espera 3 segundos')
    await delay(3000) // esperamos 3 segundos

    console.log('....estos son los numeros ingresados: ', numeros)
}


pedirDatos()
