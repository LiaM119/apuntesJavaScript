// JavaScript Avanzados

// -- -- -- Matrices -- -- --
let matrices = {
    definición : "Una matriz se representa como un array de arrays, es decir, un array donde cada elemento también es un array. Esto permite representar estructura de filas y columnas, como una tabla.",
    sintaxisDe : "matrices"
};

let matriz = [
    [1,2,3],
    [4,5,6]
]
//              fila / columna
console.log(matriz[0][1]);

// -- -- -- Tipos de Funciones -- -- --
let tiposDeFunciones = {
    funcionesDeclaradas : "Son las funciones tradicionales, definidas con la palabra clave function y un nombre. La principal caracteristica de estas funciones es que tienen hoisting, es decir, pueden ser llamadas antes de su declaración en el código, porque JavaScript las eleva al principio del archivo durante la ejecución.",

    funcionesExpresadas : "Son funciones que se definen dentro de una variable, no tienen hoisting, lo que significa que no se pueden usar antes de ser declaradas. Se crean en tiempo de ejecución.",

    arrowFunctions : "son una forma mas moderna y concisa de escribir funciones. Se usan mucho cuando se necesita una función rápida o en callbacks. No tienen hoisting, asi que no se pueden usar antes de definirlas"
};

// -- -- -- Callbacks -- -- --
let callbacks = {
    definición : "Es una función que se pasa como argumento a otra función, y que luego se ejecuta denro de esa función en un momento determinado",
    caracterisiticas : {
        1 : "Ejecutan código después de que otro haya terminado",
        2 : "Trabaja con tareas asincrónicas, como peticiones a un servidores, temporizadores, etc.",
        3 : "Reutliza funciones de manera flexible"
    },
    sintaxisDe : "callbacks"
};

function sumar(a, b, callback) {
  let resultado = a + b;
  callback(resultado);
}

sumar(5, 3, (resultado) => {
  console.log("El resultado es: " + resultado);
});
