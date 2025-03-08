// 17. Crea una función asincrónica que realice una llamada a un archivo local en formato json y
// luego manipule los datos recibidos para mostrar información específica.

async function cargar_filtrar() {
    try {
        
        let respuesta = await fetch('../datosPrueba.json')
        if (!respuesta.ok) throw 'error al cargar el archivo json'

       
        let datos = await respuesta.json()

        // filtramos personas mayores de 18 y mostramos solo nombre y ciudad
        let filtrados = datos
            .filter(persona => persona.edad >= 18)
            .map(({ nombre, ciudad }) => ({ nombre, ciudad }))


        console.log('personas mayores de 18 años son: ', filtrados)
    } catch (error) {
        console.log('error:', error)
    }
}


cargar_filtrar()
