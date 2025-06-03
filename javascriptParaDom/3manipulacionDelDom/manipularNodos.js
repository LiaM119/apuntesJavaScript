// -- -- -- Manipular Nodos En El Dom -- -- --

const paragraph = document.createElement('p') // Se crea un nodo de párrafo
const node = document.createTextNode('Esto es el contenido agregado') // Se crea un elemento de texto
paragraph.appendChild(node) // Se incorpora el elemento de texto al nodo de párrafo

const container = document.getElementById('div1') // En la variable container esta el Div
container.insertBefore(paragraph, p1) // Se inserta el párrafo antes del p1

const p2 = document.getElementById('p2')
p2.remove() // Se elimina el p2 

const p3 = document. getElementById('p3')
container.replaceChild(paragraph, p3) // Se reemplaza el p3 por el p nuevo

// -- -- -- Agregar y quitar clases -- -- -- 
//Agrega una clase al div
const addClass = () => {
    const div2ClassList = document.getElementById('div2').classList
    div2ClassList.add('red-background')
}
//Elimina la clase al div
const removeClass = () => {
    document.getElementById('div2').classList.remove('red-background') 
}

//Intercambia la clase en un solo botón
const toggleClass = () => {
    document.getElementById('div2').classList.toggle('red-background') 
}

// -- -- -- Agregar y quitar atributos -- -- --
const paragraph1 = document.getElementById('paragraph1')
const paragraph2 = document.getElementById('paragraph2')

let text = paragraph1.getAttribute('class') ? paragraph1.getAttribute('class') : paragraph2.getAttribute('class')
document.getElementById('atribute').innerHTML = text 

// -- -- -- Agregar y quitar estilos -- -- -- 
const color = document.getElementById('styles')
const background = document.getElementById('styles')

console.log(color)
console.log(background)