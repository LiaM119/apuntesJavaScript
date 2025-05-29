//JavaScript Intermedio

//Simular interacción con el usuario mediante la consola
let prompt = {
    definición : "es una función que permite mostrar un cuadro de diálogo al usuario para que ingrese un tipo de dato.", //NO FORMA PARTE DEL NÚCLEO DE JAVASCRIPT
    pasos : '1. En la terminal escribir: npm i prompt-sync. 2. Arriba del código copiar: const prompt = requiere("prompt-sync")({sigint:true});'
}; 

let parseInt = {
    definición : "Se usa para convertir la cadena de vuelta para el prompt() en un número entero",
    sintaxisDe : 'parseInt(prompt("¿Cuantos años tienes?"));'
}; 

// -- -- -- While -- -- --
let bucleWhile = {
    definición : "Se usa para convertir la cadena de vuelta para el prompt() en un número entero",
    sintaxisDe : "while"
}; 

while (condition) {
    // Código a ejecutar mientras la condición sea verdadera
}; 

//-- -- -- Do While -- -- --
let bucleDoWhile = {
    definición : "el bucle do...while  ejecuta un bloque de código al menos una vez a diferencia del while, y luego repite la ejecución mientras se cumpla una condición",
    sintaxisDe : "Do while"
}; 

do {
    // Código a ejecutar al menos una vez
} while (condition);

// -- -- -- For -- -- --
let bucleFor = {
    definición : "se utiliza para repetir un bloque de código un número determinado de veces. Su estructura incluye una inicialización, una condición y una expresión de incremento o decremento.",
    sintaxisDe : "for"
}; 

for (inicialización; condición; incremento) {
  // Código a ejecutar en cada iteración
}; 

// -- -- -- Arrays -- -- --
let estructuraArray = {
    definición : "permite almacenar múltiples valores en una sola variable, organizados en una lista ordenada. Cada valor en un array se llama elemento, y cada elemento tiene un índice numérico que comienza en 0",
    sintaxisDe : "array"
}; 

let array = ["tipo de dato", "tipo de dato", "tipo de dato"]; 

// -- -- -- Objetos literales -- -- --
let objetosLiterales = {
    definición : "Permite agrupar datos y funcionalidades relacionadas (Propiedades y métodos) en una sola estructura",
    sintaxisDe : "Objetos literales" 
}

let persona = {
    sexo : "masculino",
    edad : 18,
    trabajo : "programador",
    etc : "etc"
}