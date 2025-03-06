// 16. Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
// para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo,
// mostrar solo los nombres que comiencen con "A").
function pedirLetra() {
    return new Promise(resolve => {
        let letra = prompt('ingresa la letra por la que quieres filtrar los nombres').toUpperCase().trim()
        if (!letra) throw 'no ingresaste ninguna letra' // validamos que no estr vacio
        resolve(letra)
    })
}

pedirLetra()
    .then(letra => {
        return fetch('../datosPrueba.json')
            .then(respuesta => {
                if (!respuesta.ok) throw 'error al cargar el archivo json'
                return respuesta.json()
            })
            .then(datos => ({ datos, letra })) // pasamos datos y letra juntos
    })
    .then(({ datos, letra }) => {
        // filtramos los nombres comparando el primer caracter
        let filtrados = datos.filter(persona => persona.nombre.toUpperCase()[0] === letra)

        if (filtrados.length === 0) console.log(`no hay nombres que empiecen con "${letra}"`)
        else console.log(`personas con nombre que empieza con "${letra}":`, filtrados)
    })
    .catch(error => console.log('error:', error))
