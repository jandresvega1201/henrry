'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value;
  this.left = null
  this.right= null
}
BinarySearchTree.prototype.insert = function (value) {
  if (value > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value)
    }else {this.right.insert(value)}
  }else if (value < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value)
    }else {this.left.insert(value)}
  }
}
BinarySearchTree.prototype.size = function () {
  let contador = 1
  if (this.left === null && this.right === null) {
    return contador
  }
  else if (this.left === null && this.right !== null) {
    return contador+this.right.size()
  }
  else if (this.left !== null && this.right === null) {
    return contador+this.left.size()
  }else if (this.left !== null && this.right !== null){
    return contador+this.left.size() + this.right.size()
  }
}
BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value) return true;
  else if (value < this.value) {
    if (this.left === null) {
      return false;
    }
    else {
      return this.left.contains(value);
    }
  }
  else if (value > this.value) {
    if (this.right === null) {
      return false;
    }
    else {
      return this.right.contains(value);
    }
  }
}
BinarySearchTree.prototype.depthFirstForEach = function (collback, en_orden) {
  switch (en_orden) {
    case 'pre-order':
      collback(this.value);
      if (this.left !== null) {
        this.left.depthFirstForEach(collback, en_orden)
      }
      if (this.right !== null) {
        this.right.depthFirstForEach(collback, en_orden)
      }
      break;
    case 'post-order':
      if (this.left !== null) {
        this.left.depthFirstForEach(collback, en_orden)
      }
      if (this.right !== null) {
        this.right.depthFirstForEach(collback, en_orden)
      }
      collback(this.value)
      break;
    default:
      if (this.left !== null) {
        this.left.depthFirstForEach(collback, en_orden)
      }
      collback(this.value)
      if (this.right !== null) {
        this.right.depthFirstForEach(collback, en_orden)
      }
      break;
  }
}
BinarySearchTree.prototype.breadthFirstForEach = function (collback, arr=[]) {
  if (this.left !== null) {
    arr.push(this.left)
  }
  if (this.right !== null) {
    arr.push(this.right)
  }
  collback(this.value);
  if (arr.length > 0) {
    arr.shift().breadthFirstForEach(collback, arr);
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
