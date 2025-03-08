
let usuario = {
    nombre: '',
    edad: 0,
    email: '',
    fechaNacimiento: ''
};


let validacion = {
    set(objeto, propiedad, valor) {
        // Eliminamos espacios en blanco al inicio y final del valor
        if (typeof valor === 'string') {
            valor = valor.trim();
        }

        // Validación para num
        if (propiedad === 'edad' && (isNaN(valor) || valor <= 0)) {
            console.log(` Error: La propiedad "${propiedad}" debe ser un número válido.`);
            return false;
        }

        // Validación para letras
        if (propiedad === 'nombre' && !/^[a-zA-Z]+$/.test(valor)) {
            console.log(` Error: La propiedad "${propiedad}" solo debe contener letras.`);
            return false;
        }

        // Validacio para correos 
        if (propiedad === 'email' && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(valor)) {
            console.log(` Error: La propiedad "${propiedad}" debe ser un correo válido.`);
            return false;
        }

        // Validacio para fechas
        if (propiedad === 'fechaNacimiento' && !/^\d{4}-\d{2}-\d{2}$/.test(valor)) {
            console.log(` Error: La propiedad "${propiedad}" debe ser una fecha válida en formato YYYY-MM-DD.`);
            return false;
        }

        // Si pasa todas las validaciones, se asigna el valor
        objeto[propiedad] = valor;
        console.log(`Propiedad "${propiedad}" actualizada a "${valor}".`);
        return true;
    }
};


let usuarioProxy = new Proxy(usuario, validacion);

// Función para ingresar datos
async function ingresarDatos() {
    usuarioProxy.nombre = prompt("Ingrese su nombre (solo letras):");
    usuarioProxy.edad = prompt("Ingrese su edad (solo números):");
    usuarioProxy.email = prompt("Ingrese su correo electrónico:");
    usuarioProxy.fechaNacimiento = prompt("Ingrese su fecha de nacimiento (YYYY-MM-DD):");

    console.log(" Datos finales:", usuario);
}


ingresarDatos();
