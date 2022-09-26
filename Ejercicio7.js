const returnFalsyValues=(obj,callback) =>{
    return Object.entries(obj)
        .filter(([_key,value])=>!callback(value))
        .reduce((prev,[key,_value])=>{
            prev[key]=obj[key];
            return prev;
        })
}
const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')
 
console.log(result); // {a: 1, c: 3}