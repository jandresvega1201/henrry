'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let pivote = array[0]
  let arrayIsq = []
  let arrayDer = []

  if (array.length === 1 || array.length === 0) {
    return array
  }
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivote) {
      arrayIsq.push(array[i])
    }else {
      arrayDer.push(array[i])
    }
  }
  return quickSort(arrayIsq).concat(pivote, quickSort(arrayDer))

}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let isq = array.slice(0, array.length/2)
  let der = array.slice(array.length/2)

  if (array.length === 1) {
    return array
  }

  function ordenar(left, right) {
    let array = []
    let contador1 = 0
    let contador2 = 0
    while (contador1 < left.length && contador2 < right.length) {
      if (right[contador2] > left[contador1]) {
        array.push(left[contador1])
        contador1++
      }else {
        array.push(right[contador2])
        contador2++
      }
    }
    while (contador1 <left.length) {
      array.push(left[contador1])
      contador1++
    }
    while (contador2 < right.length) {
      array.push(right[contador2])
      contador2++
    }

    return array;
  }

  return ordenar(mergeSort(isq), mergeSort(der))

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
