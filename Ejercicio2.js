const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test']

function arrClear(arr){
    var myFilterArray = arr.filter(Boolean);
    return myFilterArray;
}

const solution=arrClear(arrDirty);
console.log(solution)