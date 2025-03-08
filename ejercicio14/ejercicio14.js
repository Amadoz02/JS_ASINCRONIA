// 14. Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
// devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
// y mostrar el resultado final.

function promesa(num) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`promesa ${num} resuelta`)
            resolve(num)
        }, 1000)
    })
}

promesa(5)
    .then(num1 => promesa(10).then(num2 => num1 + num2))
    .then(suma1 => promesa(15).then(num3 => suma1 + num3))
    .then(resultadoFinal => console.log(`suma total: ${resultadoFinal}`))
