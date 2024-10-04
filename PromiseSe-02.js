const cart=["shoes","pants","kurta"];

const promise=createOrder(cart); // it returns orderId

console.log(promise);

promise.then(function(orderId){
    console.log(orderId)
}).then(function(orderId){
    return proceedToPayment(orderId);
}).then(function(paymentInfo){
    console.log(paymentInfo);
}).catch(function(err){
    console.log(err.message);
})

function createOrder(cart){
    const pr=new Promise(function(resolve,reject){
        //validate the cart
        //create order
        //orderId

        if(!validateCart(cart)){
            const err=new Error("Cart is not valid")
            reject(err);
        }
        const orderId="12345"; //db calls
        if(orderId){
           setTimeout(function(){
            resolve(orderId);
           },5000)
        }
    })


    return pr;
}

function proceedToPayment(orderId){
    //pyment
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Paymenrt is successful");
        },5000)
    })
}

function validateCart(cart){
    return true;
}