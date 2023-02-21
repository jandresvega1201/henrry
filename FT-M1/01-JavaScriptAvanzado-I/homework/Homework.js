//JAVASCRIPT

console.log(6 / "3" )        //2
console.log("2" * "3" )     //6
console.log(4 + 5 + "px")  //"9px"
console.log("$" + 4 + 5)  //"$45"
console.log("4" - 2)     //2
console.log("4px" - 2)  //NaN
console.log(7 / 0)     //NaN
console.log({}[0])    //infinity
console.log(parseInt("09"))  //9
console.log(5 && 2)               //2
console.log(2 && 5)              //5
console.log(5 || 0)             //5
console.log(0 || 5)            //5
console.log([3]+[3]-[10])     //23
console.log(3>2>1)           //false
console.log([] == ![])      //true

console.log("--------------------------------------------------")

//¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

//javascript
function test() {
    console.log(a); //undefined
    console.log(foo());//2

    var a = 1;
    function foo() {
        return 2;
    }
}
console.log(test())

//Y el de este código? :

//javascript

var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack; //undefined
    }
    return snack; //undefined
}

console.log(getFood(false))
