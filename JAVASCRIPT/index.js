// let name="sai";
// var age=20;


// if(age>18){
//     const name="sai.B";
//     console.log(name);
// }
// console.log(name);
// let studentregistration={
//     name:"sai deekshitha",
//     schooll:"yasoda concept schooll",
//     rollno:"12"
// }
// console.log(studentregistration)

//array

// let friends=["sai","deekshitha","vyas"]
// console.log(friends)

// alerts

// alert("deekshu is beautfull")

// prompt

// prompt("deekshu is super cute..!")

// prompt
// let m=prompt("Enter your pet name")
// console.log(m)
// confirm("Are sure to exit")

// console.log("welcome")
// console.info("achyu")
// console.warn("don't disturb")
// console.error("she is cute")

//spread operator

// let extenalmarks=[34,46,45,50,50]
// let internalmarks=[20,15,20,19]

// let reesult=[45,65,extenalmarks]
// let final=[34,455,565,...internalmarks]
// console.log(extenalmarks)
// console.log(final)

//rest parameter

// function addition(x,y,...remainData){
//      console.log(x);
//      console.log(y);
//      console.log(remainData);

// }
// console.log(addition(2,434,43,"dee"))

//distruting of array]

// let gh=["dee","ach","viji","bha"]
// let[dee,ach]=gh
// let n1=gh[3,2];
// console.log(n1)
let sr={
    n:"deee",
    rn:"34",
    mn:"4465678876"

}
let {n,rn,...rl}=sr;
console.log(n);
console.log(rn);
console.log(rl)