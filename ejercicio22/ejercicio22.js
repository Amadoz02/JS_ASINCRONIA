// 22. Crear un objeto proxy usando la clase Proxy

let persona = {
    nombre: 'helder',
    edad: 18
}

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
        return true 
    }
}


let personaProxy = new Proxy(persona, manejador)


console.log(personaProxy.nombre) 
console.log(personaProxy.edad) 
console.log(personaProxy.apellido) 


personaProxy.edad = 25 // modifica la edad correctamente
personaProxy.edad = 'veinticinco' // intento de modificar edad
personaProxy.apellido = 'gomez'


console.log(personaProxy.apellido)
