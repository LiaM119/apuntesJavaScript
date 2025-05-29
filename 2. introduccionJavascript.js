//Introducción a JavaScript

let variablesYTiposDeDatos = "Una variable es un espacio en la memoria que se usa para guardar un dato que puede cambiar durante la ejecución del programa. Cada variable tiene un nombre, un tipo de dato (como números, textos, etc.) y un valor.";

// Operadores Lógicos
let operadoresLogicos = {
    and : "&&",
    or : "||",
    not : "!"
};

// Funciones
let funciones = {
    definición: "Es un bloque de código reutilizable que se ejecuta cuando es llamado. Permite organizar el código, evitar repeticiones y facilitar tareas complejas.",
    ejemploDe: "función saludar"
};

// EJEMPLO "SALUDAR"
function saludar(){
        console.log("Hola");
}; 
saludar();

// Return
let palabraReturn = "el return se utiliza dentro de una funcion para devolver un valor al lugar donde fue llamado."; 


// Condicionales
let condicionales = {
    estructuraIfElse : "se utiliza para tomar decisiones en el codigo. Permite ejecutar diferentes bloques de código según si una condición es verdadera o falsa. (Evalua condiciones booleanas (True/False)).",
    instruccionElseIf : "Se usa cuando queremos evaluar multiples condiciones despues de un if. Permite comprobar varias opciones en orden, y ejecutar el primer bloque cuyo resultado sea verdadero.",
    sintaxisDe : "if/else if/ else"
};

if (condition) {
    if (condition) {
        //código si condición es verdadera 
    }
} else if (condition2){
    //código si condición2 es verdadera 
} else {
    //código si ninguna condición es verdadera
}

let condicionalesAnidados = "Los condicionales anidados son estructuras if, else if o else que están dentro de otras estructuras condicionales. Se utilizan para evaluar condiciones más complejas que dependen de decisiones anteriores.";

let ifTernario = "El operador ternario es una forma abreviada de escribir una estructura if/else. Se usa para evaluar una condición y devolver un valor u otro en una sola línea.";

// Switch
let estructuraSwitch = {
    definición: "Se usa para evaluar una expresión y ejecutar diferentes bloques de código según el valor que tome esa expresión. Es una alternativa al uso de múltiples if/else if.",
//La diferencia entre switch y if/else if, es que el if se usa cuando queremos evaluar condiciones complejas o diferentes tipos de comparaciones. Mientras que switch se usa cuando queremos comparar una misma variable contra varios valores exactos. Es más ordenado cuando hay muchas opciones posibles para un solo valor.
    sintaxisDe : "switch"
}

// SINTAXIS SWITCH
switch (key) {
    case valor1:
        //código si expresión === valor1
        break;
    case valor2:
        //código si expresión === valor2
        break;
        //etc...
    default:
        //código si ningun case coincide
        break;
}

