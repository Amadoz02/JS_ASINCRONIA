

// definimos un objeto base con propiedades iniciales
let persona = {
    nombre: 'helder',
    edad: 18
}

// creamos un manejador con funciones para interceptar operaciones en el objeto
let manejador = {
    // intercepta cuando se accede a una propiedad del objeto
    get(objeto, propiedad) {
        if (propiedad in objeto) { 
            console.log(`accediendo a la propiedad "${propiedad}"`) // mensaje de acceso
            return objeto[propiedad] // devuelve el valor original
        } else {
            console.log(`la propiedad "${propiedad}" no existe`) // si la propiedad no existe
            return undefined
        }
    },

    // intercepta cuando se intenta modificar o agregar una propiedad
    set(objeto, propiedad, valor) {
        if (propiedad === 'edad' && typeof valor !== 'number') { 
            console.log('error: la edad debe ser un número') // validación si edad no es número
            return false // bloqueamos la asignación
        }
        console.log(`modificando la propiedad "${propiedad}" a "${valor}"`) // mensaje de modificación
        objeto[propiedad] = valor // asignamos el nuevo valor
        return true // confirmamos que la modificación fue exitosa
    }
}

// creamos el proxy usando el objeto base y el manejador
let personaProxy = new Proxy(persona, manejador)

// pruebas de acceso a propiedades
console.log(personaProxy.nombre) // accede a "nombre"
console.log(personaProxy.edad) // accede a "edad"
console.log(personaProxy.apellido) // intenta acceder a "apellido" (no existe)

// pruebas de modificación de propiedades
personaProxy.edad = 25 // modifica la edad correctamente
personaProxy.edad = 'veinticinco' // intento de modificar edad con un string (error)
personaProxy.apellido = 'gomez' // agrega una nueva propiedad

// verificamos que el apellido ahora existe
console.log(personaProxy.apellido)
