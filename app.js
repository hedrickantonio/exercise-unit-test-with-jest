const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar(cantidad){
   return cantidad *  oneEuroIs.USD;

}

function Conversor(){
return oneEuroIs.JPY / oneEuroIs.USD
}
console.log(Conversor())

let Valor = Conversor();

function fromDollartoYenes( cantidad ){

    return cantidad * Valor;
}

console.log(fromDollartoYenes(1));


let YenesporLibra = oneEuroIs.JPY / oneEuroIs.GBP;

console.log(YenesporLibra);

function FromYentoPounds(cantidad){
return cantidad / YenesporLibra

}

console.log(FromYentoPounds(1))

module.exports = { sum,fromEuroToDollar,fromDollartoYenes,FromYentoPounds };