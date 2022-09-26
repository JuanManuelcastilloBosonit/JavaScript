var arrayNuevo=[];
const splitArrayIntoChunks=(arr,n) =>{
    for(let i=0;i<arr.length;i+=n){
        let trozo=arr.slice(i,i+n);
        arrayNuevo.push(trozo);
    }
    return arrayNuevo
}

const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]
