// 18. Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
// utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.

function crear_promesas(mensaje, tiempo) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(mensaje)
            resolve(mensaje) 
        }, tiempo)
    })
}

async function ejecutarPromesas() {
    try {
        // creamos tres promesas con diferentes tiempos
        let promesa1 = crear_promesas('promesa 1 completada', 2000) 
        let promesa2 = crear_promesas('promesa 2 completada', 1000) 
        let promesa3 = crear_promesas('promesa 3 completada', 3000)

        // esperamos que todas se resuelvan
        await Promise.all([promesa1, promesa2, promesa3])

        console.log('todas las promesas se han completado') 
    } catch (error) {
        console.log('error:', error)
    }
}


ejecutarPromesas()
