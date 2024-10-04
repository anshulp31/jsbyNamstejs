
let cache={};
function multiply(...args){
    var argsCache=JSON.stringify(args);
    if(!cache[argsCache]){
        console.log(" cache")
        cache[argsCache]=args[0]*args[1]
    }
    return cache[argsCache];
}
// console.log(Date.now().toString());
console.log(multiply(1001,2552));
console.log(multiply(1001,2552));
