// currying -> It is a function that takes one parameter and return a new function that expecting a next param
// it is used to create a same variable again and again
function a(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

console.log(a(5)(2)(3));