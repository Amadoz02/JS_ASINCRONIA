// 11. Crea una Promisa que se resuelva después de 3 segundos y luego imprima "Promisa
// resuelta" cuando se cumpla.

const promesa = new Promise(resolve => {
    setTimeout(() => {
        resolve('Promesa resuelta')
    }, 3000)
})

promesa.then(mensaje => alert(mensaje))
