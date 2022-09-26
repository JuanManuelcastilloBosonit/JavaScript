const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];

var comun = arrNumber2.filter(arrNumber2 => arrNumber3.indexOf(arrNumber2) !==-1 && arrNumber1.indexOf(arrNumber2) !==-1)
console.log(comun)