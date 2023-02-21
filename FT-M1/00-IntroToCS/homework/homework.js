'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let contador = 0
  let suma=0
  for (let i = num.length -1; i >= 0; i--) {
    if (num[i] === "1") {suma = suma + Math.pow(2, contador)
      contador++
    }else{contador++}
  }
  return suma
}
function DecimalABinario(num) {
  // tu codigo aca
  let array = []
  while (num >= 1) {
    array.unshift(Math.trunc(num % 2))
    num = num / 2
  }
  return array.toString().replace(/,/g,"")

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}