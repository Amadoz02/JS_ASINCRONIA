// 21. Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
// try/catch para mostrar un mensaje de error en caso de fallo.


async function cargarDatos() {
    try {
        let respuesta = await fetch('../datosPrueba.json') 

        if (!respuesta.ok) throw new Error(`error al cargar el archivo json: ${respuesta.status}`) 
       

        let datos = await respuesta.json() 

        console.log('datos cargados correctamente:', datos) 
    } catch (error) {
        console.log('ocurrió un error:', error.message)
    }
}

cargarDatos()
