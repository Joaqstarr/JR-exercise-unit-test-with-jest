// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

function fromEuroToDollar(euros){
    let valueInDollar = euros * 1.07;
    return valueInDollar;
}

function fromEuroToYen(euro){
    return euro * 156.5;
}
function fromDollarToEuro(dollar){
    return dollar/1.07;
}

function fromEuroToPound(euro){
    return euro * 0.87;
}
function fromYenToEuro(yen){
    return yen/156.5;
}
function fromYenToPound(yen){
    return fromEuroToPound(fromYenToEuro(yen));
}
function fromDollarToYen(dollars){
    return fromEuroToYen(fromDollarToEuro(dollars));
}

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};

