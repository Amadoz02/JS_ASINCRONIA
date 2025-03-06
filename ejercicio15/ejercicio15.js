// 15. Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
// obtenidos en la consola.


async function leerArchivo() {
    try {
        let respuesta = await fetch('../datosPrueba.json') // cargamos el archivo json
        let datos = await respuesta.json() // convertimos la respuesta a json
        console.log('datos obtenidos:', datos) // mostramos los datos en consola
    } catch (error) {
        console.log('error al leer el archivo: ', error) // mostramos el error
    }
}

leerArchivo()
