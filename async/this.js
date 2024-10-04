// "use strict"

// this inside global space

    console.log(this); // globalobject- window,global etc;

//this inside functions

function x(){
    // the value of this keyworkd inside a  func is depends on 
    // strict or non-strict mode
    console.log(this);
}
x();

//this inside non-strict Mode (this substitution)

//this keyword value is depends on how function is called

x();//undefined
// window.x();//window object


//this inside a object's method

//inside a object this keyworkd is refer to that object whrer it is used
const obj={
    a:10,
    x:()=>{
        console.log(this);
    }
}

obj.x(); // print the object


// real life wxample

const student={
    name:"Anshul",
    printName:function(city){
        console.log(this.name , city);
    }
}

student.printName();

const student2={
    name:"Aman"
}

// call apply bind methods(sharing methods)
student.printName.call(student2); //value of this keyword is student 2
student.printName.apply(student2,["Indore"]);
const fun=student.printName.bind(student2,"Mumbai");






