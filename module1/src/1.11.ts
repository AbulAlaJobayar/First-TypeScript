
{
    // ternary operator
    type IsAdult=number;
const isAdult:IsAdult=18
if(isAdult>=18){
    console.log('adult')
}else{
    console.log('not Adult')
}
const Adult=isAdult>=18?"adult":"notAdult";
console.log({Adult})

//  nullish operator
// const isAuthenticated=null;
const isAuthenticated='';

const result1=isAuthenticated??"guest";
const result2=isAuthenticated?isAuthenticated:"guest"
console.log({result1},{result2})
// optional chaining
type User={
    name:string;
    email?:string;
    address:{
        city:string;
        road:string;
        presentAddress?:string;

    }

    
}
const user:User={
    name:'jobayar',
    email:'jobayar@gmail.com',
    address:{
        city:'khulna',
        road:'khulna'
    }
    
}
const permanentAddress=user?.address?.presentAddress??'no Address'
console.log({permanentAddress})


}