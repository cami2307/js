function mostrar(){
    opc=parseInt(prompt("opcion 1: para sumar, opcion 2: para restar, opcion 3: para multiplicar, opcion 4: para dividir, opcion 5: para ver cual es el mayor de los numeros "))

switch(opc){
    case 1:
        num1=parseFloat(prompt("ingrese el primer numero: "));
        num2=parseFloat(prompt("ingrese el segundo numero: "));
        resultado=num1+num2
        document.write(`El resultado de la suma de los dos numeros es: ${resultado}`)
        break;
    case 2:
        num1=parseFloat(prompt("ingrese el primer numero: "));
        num2=parseFloat(prompt("ingrese el segundo numero: "));
        resultado=num1-num2
        document.write(`El resultado de la resta de los dos numeros es: ${resultado}`)
        break;
    case 3:
        num1=parseFloat(prompt("ingrese el primer numero: "));
        num2=parseFloat(prompt("ingrese el segundo numero: "));
        resultado=num1*num2
        document.write(`El resultado de la multiplicacion es: ${resultado}`)     
        break;
    case 4:
        num1=parseFloat(prompt("ingrese el primer numero: "));
        num2=parseFloat(prompt("ingrese el segundo numero: "));
        resultado=num1/num2
        document.write(`El resultado de la division es: ${resultado}`)   
        break;
    case 5:
        num1=parseFloat(prompt("ingrese el primer numero: "));
        num2=parseFloat(prompt("ingrese el segundo numero: "));
        if (num1 > num2)
            document.write(`El numero 1 `+num1+ "es mayor que el numero 2")   
        else{
            document.write("El segundo numero es mayor que el primero")
        }
        break;      
    }
}