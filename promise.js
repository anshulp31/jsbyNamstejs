// new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("promise1");
//             resolve();
//         },1000);

//     }
// ).then(()=>{
//     console.log("promise resolve");
// }).catch((err)=>{
//     console.log("promise reject");
// })


// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve({username:"anshul",name:"Porwal"})
//     },1000)
// }).then((user)=>{
//     console.log(user);
// })

// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let err=true;
//         if(!err){
//             resolve();
//         }
//         else{
//             reject();
//         }
//     },1000)
// }).then(()=>{
//     console.log("Promise resolved");
// }).catch((err)=>{
//     console.log("promise reject");
// })


// async function getData(){
//     try {
//         let resp=await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data=await resp.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error)
//     }
// }
// getData();

fetch('https://jsonplaceholder.typicode.com/posts')
.then((resp)=>{
    return resp.json();
})
.then((data)=>{
    console.log(data);
})