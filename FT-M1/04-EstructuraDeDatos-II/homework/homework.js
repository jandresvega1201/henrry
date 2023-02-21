'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this.head = null;
}

function Node(value){
  this.value = value;
  this.next = null;
}
LinkedList.prototype.add = function (data) {
  let newNodo = new Node(data)
  let actual = this.head
  if (this.head == null) {
    this.head = newNodo
    return newNodo
  }
  while (actual.next != null) {
    actual = actual.next
  }
  actual.next = newNodo
  return newNodo
}
LinkedList.prototype.remove = function () {
  let actual = this.head
  let aux
  if (actual === null) {return null}
  if (actual.next=== null) {
    let aux = actual
    this.head = this.head.next
    return aux.value
  }
  while (actual.next.next !== null) {actual = actual.next}
  aux = actual.next
  actual.next = null
  return aux.value
}
LinkedList.prototype.search = function (value) {
  if (this.head === null) {return null}
  let actual = this.head
  while (actual) {
    if (actual.value === value) {return actual.value}
    else if (typeof value === 'function') {
      if (value(actual.value)===true) {
        return actual.value
      }
    }
    actual = actual.next
  }
  return null
}

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.numBuckets = 35;
  this.buckets = []
}
HashTable.prototype.set = function (clave, valor) {
  if (typeof clave !== "string"){throw new TypeError('Keys must be strings')}
  let arg = this.hash(clave)
  if (this.buckets[arg] === undefined) {
    this.buckets[arg] = {}
  }
  this.buckets[arg][clave] = valor
}
HashTable.prototype.get = function (clave) {
  let aux = this.hash(clave)
  return this.buckets [aux][clave]
}
HashTable.prototype.hasKey = function (clave) {
  let aux = this.hash(clave)
  console.log(aux)
  return this.buckets[this.hash(clave)].hasOwnProperty(clave)
}
HashTable.prototype.hash = function (cadena) {
  let contador = 0
  for (let i = 0; i < cadena.length; i++) {
    contador += cadena.charCodeAt(i)
  }
  return contador % this.numBuckets
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
