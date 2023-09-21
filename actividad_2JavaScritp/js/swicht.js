function mostrar (){

    function triangulo(){
        n1=parseInt(prompt("ingrese la base del triangulo: "))
        n2=parseInt(prompt("ingrese la altura del triangulo: "))
        resultado=n1*n2/2;
        document.write(`el valor del residuo es: ${resultado}`)}

    function rectangulo(){
        n1=parseInt(prompt("ingrese la base del rectangulo: "))
        n2=parseInt(prompt("ingrese la altura del rectangulo: "))
        resultado=n1*n2
        document.write(`el valor del residuo es: ${resultado}`) 
    }

    function cuadrado(){
        n1=parseInt(prompt("ingrese el valor de un lado del cuadrado: "))
        resultado=n1**2
        document.write(`el valor del residuo es: ${resultado}`)
    }

    opc=parseInt(prompt("ingrese opcion 1: para triangulo, opcion 2: para rectangulo,opcion 3:cuadrado"))
    switch(opc){
        case 1:
            triangulo()
            break;
            case 2:
                rectangulo()
                break;
                case 3:
                    cuadrado()
                    break;
                    
                default:
                    alert("la opcion no es valida")
    }
}