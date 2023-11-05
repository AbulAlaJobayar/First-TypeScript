{
//
// interface

type User1 ={
    name:string;
    age:number;
}

interface User2{
    name:string;
    age:number; 
}
// type alies Extend
type UserWithRoll1=User1 &{role:number}

// interface Extends
interface UserWithRoll2 extends User2{
    role:number;
}

// const user:User1={
// name:"jobayar",
// age:20,
// }
const userResult1: UserWithRoll1={
name:"jobayar",
age:20,
role:5,
}
const userResult2:UserWithRoll2={
name:"jobayar",
age:20,
role:5,
}
//  Array interFace 
type Roll1=number[];

interface Roll2 {
    [index:number]:number
}

const rollNumber:Roll1=[1,2,3]

// function interface
// type alies function
type Add1=(num1:number, num2:number)=>number;
// interface function

interface Add2{
    (num1:number,num2:number):number
}
const add:Add1 =(num1,num2)=>num1+num2




//
}