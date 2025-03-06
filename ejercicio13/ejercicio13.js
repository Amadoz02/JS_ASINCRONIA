// 13. Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir
// "Error: Promise rechazada".

function verificarNumero(numero) {
    return new Promise((resolve, reject) => {
        console.log('procesando...')

        setTimeout(() => {
            if (numero <= 5) {
                resolve(`exito: el numero ${numero} es valido`)
            } else {
                reject(`error: el numero ${numero} es demasiado alto`)
            }
        }, 2000)
    })
}

async function ejecutar() {
    let num = parseInt(prompt('ingresa un numero menor a 5 para que sea valido'))
    
    verificarNumero(num)
        .then(mensaje => console.log(mensaje)) // si se resuelve
        .catch(error => console.log(error)) // si se rechaza
}

ejecutar()
