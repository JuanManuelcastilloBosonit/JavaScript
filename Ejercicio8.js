fromBytesToFormattedSizeUnits = function(number,decimal=3){
    const b=1000;
    const tn=decimal<0 ? 0 :decimal;
    const sizes = ['B','KB','MB','GB','TB','PB', 'EB', 'ZB','YB'];
    if(number>0){
        const i=Math.floor(Math.log(number)/Math.log(b));
        return parseFloat((number/Math.pow(b,i)).toPrecision(tn))+sizes[i];
    }else{
        number *=-1;
        const i=Math.floor(Math.log(number)/Math.log(b));
        number *=-1;
        return parseFloat((number/Math.pow(b,i)).toPrecision(tn))+sizes[i];
    }
}

const result = fromBytesToFormattedSizeUnits(1000);
console.log(result); // 1KB
 
const result1 = fromBytesToFormattedSizeUnits(123456789);
console.log(result1); // 123MB
 
const result2 = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result2); // -12.145GB