var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }
  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) {
    resultSet.push(startEl)
  }
  for (let i = 0; i < startEl.children.length; i++) {
    let arrayNew = traverseDomAndCollectElements(matchFunc, startEl.children[i]);

    resultSet = [...resultSet, ...arrayNew]
  }
  return resultSet
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {

  if (selector[0] === '#') {return 'id'}
  else if (selector[0] === '.') { return 'class'}
  else if (selector.split('.').length > 1) { return 'tag.class'}
  else {return 'tag'}
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = function (element) {
      let aux = "#"+element.id;
      return selector === aux;
    }
  } else if (selectorType === "class") {
    matchFunction = function (element) {
      let aux = element.classList
      for (let i = 0; i < aux.length; i++) {
        if (`.${aux[i]}` === selector)return true
      }
      return false;
    }
  } else if (selectorType === "tag.class") {
    matchFunction = function (element) {
      let aux = element.className.split(" ", 1)
      let aux1 = element.tagName + "."+aux
      return selector === aux1.toLowerCase()
    }
  } else if (selectorType === "tag") {
    matchFunction = function (element) {
      let aux = element.tagName.toLowerCase()
      return selector === aux;
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
