// Algoritmos

// -- -- -- Bubble sort -- -- --
let bubbleSort = {
    definición : "es un algoritmo de ordenamiento que recorre repetidamente una lista, comparando elementos adyacentes y intercambiándolos si están en el orden incorrecto. Este proceso se repite hasta que la lista está completamente ordenada.",
    sinaxis : "bubble sort"
};

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Intercambia elementos
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    // Optimización: reduce el rango de comparación
    n--;
  } while (swapped);
  return arr;
};

// EJEMPLO:
console.log(bubbleSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]

// -- -- -- Linear search -- -- --
let linearSearch = {
  //Es útil para arreglos pequeños o no ordenados, pero no es eficiente para listas grandes.
  definición : "es un algoritmo simple para encontrar un elemento en una lista o arreglo. Consiste en recorrer el arreglo elemento por elemento desde el inicio hasta el final, comparando cada uno con el valor buscado hasta encontrarlo o hasta que termine la lista.",
  sintaxisDe: "linear search"
};

// EJEMPLO: 
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Devuelve el índice si lo encuentra
    }
  }
  return -1; // Devuelve -1 si no se encuentra el elemento
}

let numeros = [5, 3, 8, 2, 9];
let resultado = linearSearch(numeros, 8);

console.log(resultado); 

// -- -- -- Binary search -- -- --
let binarySeatch = {
  //A. Si es igual, lo encontró. B. Si es menor, busca en la mitad izquierda. C. Si es mayor, busca en la mitad derecha.
  definición : "La búsqueda binaria es un algoritmo eficiente para encontrar un elemento en un arreglo ordenado. Consiste en dividir repetidamente el arreglo a la mitad, comparando el valor buscado con el elemento del medio.",
  sintaxisDe : "binary search"
}; 

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Encontrado
    } else if (arr[mid] < target) {
      left = mid + 1; // Buscar en la derecha
    } else {
      right = mid - 1; // Buscar en la izquierda
    }
  }

  return -1; // No encontrado
}; 

let numeros2 = [2, 3, 5, 8, 9]; // ¡Debe estar ordenado!
let resultado2 = binarySearch(numeros2, 8);

console.log(resultado2); // 3 (porque el 8 está en la posición 3)
