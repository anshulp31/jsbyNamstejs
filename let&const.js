

// let a=10;
// console.log(a);
// var b=100;


//block scope in js

// {
//     var a=10;
//     let b=30;
//     const c=40;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);


//closures 

// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z=x();
// console.log(z);
// z();


//closures + setTimeout

function x(){
    for(let i=1;i<=5;i++){
        setTimeout(() => {
            console.log(i);
        },i* 1000);
        console.log("Hello");
    }
}
x();

