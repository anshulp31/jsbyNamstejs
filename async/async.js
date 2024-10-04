


// const p=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("Promise is resolved");
//     },20000)
// })



// const p1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("Promise is resolved");
//     },30000)
// })
//  async function getData(){
//     console.log("Heeelo world")
        //JS engine will not for anything it just see await here and chek promise is not resolved yet so instead of waiting it will suspend the function from the call stack and it will come again into the call satck as soon as promise gets settled(resolve or reject) 
//     const res1=await p;
//     console.log(res1);
//     console.log("Heelo");
//     const res=await p1;
//     console.log(res);
//     console.log("Hello 2");
// }       
// getData();

// console.log(data);

// data.then(function(res){

//     console.log(res);
//     console.log("Hello");
// });
//async function always return a promise and if we are not return a promise intead of we return a value (string,number ,bool) it will take this value and wrap into a promise and return it;
const API_URL='https://api.github.com/users/anshulp3';
async function handlePromise(){
    try {
        //once the promise is resolve then only it will go to the next line
        //await is wait for the promise to be resolved
        const data=await fetch(API_URL);
        console.log(data)
        const result=await data.json();
        console.log(result);

    } catch (error) {
        console.log(error);
    }
}
handlePromise();
