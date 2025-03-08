// 9. ¿Cuál es el resultado del código a continuación?

let i=0; 
setTimeout(() => alert(i), 100); //? 
// asumimos que el tiempo para ejecutar esta función es > 100 ms 
for (let j = 0; j < 100000; j++) { 
i++; 
}

// La respuesta es que el código se ejecutará antes de que la alerta se muestre, 
// ya que la función setTimeout se ejecuta en otro thread, 
// y el código principal se ejecuta en el thread principal. 
// Por lo tanto, el valor de i en el código principal 
// no será modificado hasta que la alerta se muestre.
setTimeout(()=>(alert("el código se ejecutará antes de que la alerta se muestre, \n "+
    "se mostrara el valor maximo de i, ya que primeso se ejecuta el for")),2000);