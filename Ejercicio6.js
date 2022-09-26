roundTo = function(numero,decimal){
    const resul = Math.pow(10,decimal);
    return Math.round((numero)*resul)/resul
}

const roundedResult = roundTo(2.123, 2);
console.log(roundedResult); // 2.12
 
const roundedResult1 = roundTo(1.123456789, 6);
console.log(roundedResult1); // 1.123457