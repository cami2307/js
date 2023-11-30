// Function to add two numbers
function sumar(n1, n2) {
    var resultado = n1 + n2;  // Calculate the sum of n1 and n2
    var res = document.getElementById("resultado");  // Get the HTML element with the id "resultado"
    if (n1 != 0 && n2) {  // Check if n1 is not zero and n2 is truthy
        respuesta.style.display = "block";  // Display the element with the id "respuesta"
        res.innerHTML = `Total: ${resultado}`;  // Set the innerHTML of the result element with the calculated sum
        res.style.color = "green";  // Set the text color to green
    } else {
        respuesta.style.display = "block";  // Display the element with the id "respuesta"
        res.innerHTML = 'Verifique sus datos';  // Set the innerHTML of the result element with an error message
        res.style.color = "red";  // Set the text color to red
    }
}

// Similar functions for subtraction, multiplication, division, and exponentiation follow the same structure

// Function to handle user input and perform the selected operation
function mostrar() {
    let n1 = parseInt(document.getElementById("n1").value);  // Get the value of the input with id "n1" and convert it to an integer
    let n2 = parseInt(document.getElementById("n2").value);  // Get the value of the input with id "n2" and convert it to an integer
    let opc = parseInt(document.getElementById("opc").value);  // Get the value of the input with id "opc" and convert it to an integer
    switch (opc) {  // Check the value of opc using a switch statement
        case 1:
            sumar(n1, n2);  // If opc is 1, call the sumar function with n1 and n2
            break;
        case 2:
            restar(n1, n2);  // If opc is 2, call the restar function with n1 and n2
            break;
        case 3:
            multiplicar(n1, n2);  // If opc is 3, call the multiplicar function with n1 and n2
            break;
        case 4:
            dividir(n1, n2);  // If opc is 4, call the dividir function with n1 and n2
            break;
        case 5:
            potencia(n1, n2);  // If opc is 5, call the potencia function with n1 and n2
            break;
        default:
            alert("la opcion no es valida");  // If opc is not 1-5, show an alert with an error message
    }
}
