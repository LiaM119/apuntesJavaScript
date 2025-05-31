// -- -- -- Incorporación de Javascript para HTML -- -- --
let incorporarJavascriptAHTML = 'En el body poner: <script src="archivo.js"></script>'

// -- -- -- Alert, prompt, y confirm -- -- --
const ready = confirm('¿Hicisite los cursos de Maquetación web y Programación imperativa?') //Muestra una alerta en el navegador, y devuelve un true o un false segun la respuesta
console.log(ready)

const res = prompt('¿Cuál es tu lenguaje de programación favorito?', 'Javascript') //Muestra una alerta en el navegador, permite al usuario escribir una respuesta, y arranca con Javascript.                 
console.log(res)

// -- -- -- Repaso array y object -- -- --
const array = ['HTML', 'CSS', 'JavaScript', 'ReactJS'] // Array de strings

const object = { nombre : 'Liam Romero', trabajo : 'Desarrollador web', materia : 'JavaScript para DOM'} //Objeto literal

const objectArray = [ //Array de objetos literales
    { materia : 'HTML', dificultad : 6, necesario : true}, // Objetos literal
    { materia : 'CSS', dificultad : 8, necesario : true}, // Objetos literal 
    { materia : 'JavaScript', dificultad : 9.5, necesario : false}, // Objetos literal
    { materia : 'ReactJS', dificultad : 8, necesario : false}, // Objetos literal
]

// Recorre y muestra en las DevTools el array de strings
let text = ''
for(let tech of array) {
    text += tech + ', ';
}

//Recorre y muestra en las DevTools el objeto literal
for(let x in object){
    text += object[x] + ', ';
}

//Recorre el array de objetos, y muestra en las DevTools lo que contiene la variable materia
for(let x of objectArray){
    text += x.materia + ', '
}

// -- -- -- DOM : Document Object Model -- -- --
let getElementById = "El método getElementById en JavaScript se utiliza para obtener una referencia a un elemento del DOM (Document Object Model) que tiene un atributo id específico."

document.getElementById('test').innerHTML = 'texto desde javascript' //Ejemplo de getElementById para html

document.getElementById('test').style.color = 'red' //Ejemplo de getElementById para css

const form = document.forms['form1'];
let textt = '';
for (let i = 0; i < form.length; i++) {
    textt += form.elements[i].value + 'br';
}

document.getElementById('test').innerHTML = textt; 