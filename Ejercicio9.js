function toLowercaseKeys(obj){
    for(var key in obj){
        obj[key.toLowerCase()]=obj[key];
        delete obj[key];
    }
    return obj
}

const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
const myObjLowercase = toLowercaseKeys(myObject);
console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }