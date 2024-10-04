const p1=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("p1 is resolved");
    },3000)
})

const p2=new Promise(function(resolve,reject){
    setTimeout(()=>{
       resolve("p2 is resolved")
    },1000)
})

const p3=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("p3 is resolved");
    },2000)
})

Promise.race([p1,p2,p3])
.then((val)=>{
    console.log(val)
})
.catch((err)=>{
    console.log(err)
})
