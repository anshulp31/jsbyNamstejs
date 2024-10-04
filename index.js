//function Statement

// function a(){
//     console.log("a is called");
// }

// //function expression
// var b=function(){
//     console.log("b called");
// }
// a();
// b();

//Anynomous function
// function () {

// }

// var arr=[54,76,34,23,49,38,34,23,23,22]
// var firstSmalles=arr[0];
// var secondSmallest;
// for(var ind=1;ind<arr.length;ind++){
//         if(firstSmalles>arr[ind]){
//             secondSmallest=firstSmalles;
//             firstSmalles=arr[ind];
//         }
//         else if(  secondSmallest>arr[ind] && firstSmalles!=arr[ind]){
//             secondSmallest=arr[ind];
//         }
// }
// console.log(secondSmallest);

// const arr = [3, 2, 1, 9, 7, 8, 4, 6, 5];
// const k = 3;
// let result=[];
// for (let i = 0; i < arr.length; i+=k) {
//         let part=arr.slice(i,i+k);
//         part.sort((a,b)=> (a-b));
//         result.push(part);
// }


// console.log([].concat(...result));

(async ()=>{
    console.log('1');
    setTimeout(() => {
        console.log('2');
    }, 0);
    await new Promise(resolve=>{
        resolve(console.log('3'));
    })
    console.log('4');
})();

