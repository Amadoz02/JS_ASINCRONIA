    // 1. Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
// comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado.


let desde= parseInt(prompt("ingresa el comienzo dde la cadena de impresion: "));
let hasta= parseInt(prompt("ingresa el final dde la cadena de impresion: "));
if (hasta>desde){

    const imprimirNumeros_interval=(desde, hasta)=>{
        console.log("impresion con set interval");
        
        let i=desde;
        let numeros= setInterval(()=>{
            if (i>hasta){
                clearInterval(numeros);
            }else{
                console.log(i);
                i++; 
    
            }
    
        },950)
    }   
    
    imprimirNumeros_interval(desde,hasta);
    
    
    
    const imprimirNumeros_timeout=(desde, hasta)=>{
        
        setTimeout(()=>{
            if (desde<=hasta){
                console.log(desde);
                desde++;
                imprimirNumeros_timeout(desde, hasta);  
                
            }
            
        },1000)
    }
    setTimeout(() => {
        imprimirNumeros_timeout(desde,hasta)
        console.log("ahora con el set time out: \n");
        
    }, 1300*(hasta-desde));
}else{
    throw new Error("el comienzo debe ser menor al numero de finalizacion");
}
