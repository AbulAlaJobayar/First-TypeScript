{
    // type alies
type Student={
    name : string ;
    phone:string;
    age:number;
    city?:string

}


   const student:Student={
    name:"abulalajobayar",
    phone:"01928210545",
    age:30,
}
   const student2:Student={
    name:"jobayar",
    phone:"01928210545",
    age:37,
    city:"dhaka"
}
type isAdmin=boolean;

const isAdmin:isAdmin=true;
type Add=(num1:number,num2:number)=>number
 const add:Add=(num1,num2)=>num1+num2
}