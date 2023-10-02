function Persona(nombre, apellido, ingreso, egreso){
    this.nombre = nombre;
    this.apellido = apellido;
    this.ingreso = ingreso;
    this.egreso = egreso;
    this.saldo = ingreso - egreso;
}

// Crear un array para almacenar multiples personas
let personas = []

// Solicitar al usuario que ingrese datos para crear una nueva Persona
let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su Apellido");
let ingreso = parseFloat(prompt("Indique su ingresos:"));
let egreso = parseFloat(prompt("Ingrese su egresos"));

//Crear una instancia de persona con los datos proporcionados por el usuario
let nuevaPersona = new Persona(nombre, apellido, ingreso, egreso);

// Agregar la nueva Persona al Array de personsa 
personas.push(nuevaPersona);

//Agregar a otra persona
let agregarOtra = confirm("Desea agregar otra persona?");
while(agregarOtra){
    nombre = prompt("Ingrese el nombre:");
    apellido = prompt("Ingrese el apellido:");
    ingreso = parseFloat(prompt("Ingrese su ingresos:"));
    egreso = parseFloat(prompt("Ingrese sus gastos"));
}