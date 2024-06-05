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

function fromYenToPound(yen){
    return yen/180;
}
function fromDollarToYen(dollars){
    return dollars * 146.25;
}

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};

