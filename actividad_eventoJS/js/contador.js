window.addEventListener("keydown",(e)=>{  // Se agrega un evento de escucha para teclas presionadas
    if (e.key=="+"){  // Si la tecla presionada es '+'
        incrementar()  // Llama a la función incremento
    }
    else if (e.key=="-"){  // Si la tecla presionada es '-'
        decremento()  // Llama a la función decremento
    }
})


let contador=0;  // Se declara una variable contador con valor inicial 0
const valor=document.getElementById("valor")  // Se obtiene el elemento HTML con el id 'valor'

function incrementar (){  // Se define la función incrementar (error en el nombre de la función)
    //alter("incremento")  // Comentario o código que está comentado
    contador+=1;  // Incrementa el contador en 1
    //localstorage.setItem("valor",contador)  // Comentario o código que está comentado
    valor.innerHTML=contador;  // Actualiza el valor mostrado en el HTML con el valor del contador
}
function decremento (){  // Se define la función decremento
    //alter("decremento")  // Comentario o código que está comentado
    if (contador>0){  // Si el contador es mayor que 0
        contador-=1;  // Decrementa el contador en 1
        valor.innerHTML=contador;  // Actualiza el valor mostrado en el HTML con el valor del contador
    }else{
        contador=0;  // Establece el contador a 0
        valor,innerHTML=contador;  // Error de sintaxis, debería ser 'valor.innerHTML=contador;'
    }
}
function resetear(){  // Se define la función resetear
    contador=0;  // Establece el contador a 0
    valor.innerHTML=contador;  // Actualiza el valor mostrado en el HTML con el valor del contador
}
