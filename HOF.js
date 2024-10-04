
const radius=[1,2,3]


// const calculateArea=function(radius){
//     var output=[];
//     for(var i=0;i<radius.length;i++){
//         output.push(Math.PI*radius[i]*radius[i]);
//     }
//     return output;
// }

// const calculateDiameter=function(radius){
//     var output=[];
//     for(var i=0;i<radius.length;i++){
//         output.push(2*Math.PI*radius[i]);
//     }
//     return output;
// }

// console.log(calculateArea(radius));
// console.log(calculateDiameter(radius));

const area=function(radius){
    return Math.PI*radius*radius;
}
const diameter=function(radius){
    return 2*Math.PI*radius;
}

const calculate=function(radius,logic){
        var output=[];
        for(var i=0;i<radius.length;i++){
            output.push(logic(radius[i]));
        }
        return output;
}

console.log(calculate(radius,area));
console.log(calculate(radius,area));
