// const student={
//     name:"Aman",
//     printName(){
//         console.log(this.name);
//     }
// }

// // console.log(Object.prototype);
// console.log(Array.__proto__)

let object={
    city:"Indore",
    name:"Anshul",
    intro:function(){
        console.log(`${this.city} from ${this.name}`)
    }
}
let object2={
    name:"Aditya",
    city:"hydrea"
}

// let arr=["Anshul","AdityA"];
object2.__proto__=object;

