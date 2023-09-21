var nombre=prompt("Ingresa tu nombre ");
//var edad=parseInt(prompt("Ingresa la edad"));

nacimiento=parseInt(prompt("ingrese tu año de nacimiento"))
console.log(typeof (nacimiento))
//var nacimiento=1980;
const fecha = new Date();
const fechaActual = fecha.getFullYear();
let edad = fechaActual-nacimiento;


if(edad<=8){
    document.write("Bienvenido niño(a) "+nombre+" usted tiene " +edad+ " años de edad y es menor de edad")
}
else if(edad<=17){
    document.write("Bienvenido joven "+nombre+" usted tiene " +edad+ " años de edad y es menor de edad")
}
else{
    document.write("Bienvenido señor(a) "+nombre+" usted tiene " +edad+ " años de edad y es mayor de edad")
}