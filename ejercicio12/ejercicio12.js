// 12. Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
// diga "Operación completada". Utiliza async/await.
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function operacion() {
    let tiempo = parseInt(prompt('ingresa el tiempo de espera en milisegundos')) // pedimos el tiempo
    console.log(`esperando ${tiempo} milisegundos...`)

    await delay(tiempo) // espera el tiempo ingresado

    return 'operacion completada'
}

// ejecutamos la funcion y mostramos el resultado
operacion().then(console.log)
