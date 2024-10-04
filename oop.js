// const user={
//     username:'Anshul',
//     location:'indore',
//     salary:10000,
//     getDetails:function(){
//         console.log(this.username);
//         console.log(this);
//     }
// }

// console.log(user.location);
// console.log(user.getDetails());
// console.log(this);


function User(username,location,isLoggedIn){
    this.username=username
    this.location=location
    this.isLoggedIn=isLoggedIn
   
}

const userOne=new User('Anshul','Indore',true);
const userTwo=new User('aman','indore',false);
console.log(userOne);
console.log(userTwo);
console.log(this);
