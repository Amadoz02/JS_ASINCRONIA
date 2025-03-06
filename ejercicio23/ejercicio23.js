

// definimos un objeto base con valores iniciales
let usuario = {
    nombre: '',
    edad: 0,
    email: '',
    fechaNacimiento: ''
}

// creamos el manejador con reglas de validación
let manejador = {
    set(objeto, propiedad, valor) {
        // eliminamos espacios en blanco al inicio y final del valor
        if (typeof valor === 'string') {
            valor = valor.trim()
        }

        // validación para números
        if (propiedad === 'edad' && isNaN(valor)) {
            console.log(`error: la propiedad "${propiedad}" debe ser un número`)
            return false
        }

        // validación para alfanuméricos (solo letras permitidas)
        if (propiedad === 'nombre' && !/^[a-zA-Z]+$/.test(valor)) {
            console.log(`error: la propiedad "${propiedad}" solo debe contener letras`)
            return false
        }

        // validación para correos electrónicos
        if (propiedad === 'email' && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(valor)) {
            console.log(`error: la propiedad "${propiedad}" debe ser un correo válido`)
            return false
        }

        // validación para fechas (formato YYYY-MM-DD)
        if (propiedad === 'fechaNacimiento' && !/^\d{4}-\d{2}-\d{2}$/.test(valor)) {
            console.log(`error: la propiedad "${propiedad}" debe ser una fecha válida en formato YYYY-MM-DD`)
            return false
        }

        // si pasa todas las validaciones, se asigna el valor
        objeto[propiedad] = valor
        console.log(`propiedad "${propiedad}" actualizada a "${valor}"`)
        return true
    }
}

// creamos el proxy para controlar el objeto usuario
let usuarioProxy = new Proxy(usuario, manejador)

// pruebas de validación
usuarioProxy.nombre = 'Carlos'  // correcto
usuarioProxy.nombre = 'Carlos123'  // error, contiene números
usuarioProxy.edad = 25  // correcto
usuarioProxy.edad = 'veinticinco'  // error, no es un número
usuarioProxy.email = 'correo@ejemplo.com'  // correcto
usuarioProxy.email = 'correo.com'  // error, formato incorrecto
usuarioProxy.fechaNacimiento = '2000-05-15'  // correcto
usuarioProxy.fechaNacimiento = '15-05-2000'  // error, formato incorrecto
