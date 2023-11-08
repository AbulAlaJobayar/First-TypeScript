{
    //type guards
    // typeof type Guards
type AlphaNumeric=string|number


    const add=(param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric=>{
if(typeof param1==="number" && typeof param2==="number"){
   return param1+param2;
   
}else{
   const result=param1.toString()+param2.toString() 
   return result
}
    }
const result=add(5,6)
console.log(result)


// in guards
type NormalUser={
    name:string;
}
type AdminUser={
    name : string;
    role:'admin'
}
const getUser=(user:NormalUser|AdminUser)=>{
    if("role" in user){
        console.log(`my name is ${user.name} and my role is ${user.role}`)
    }else{
        console.log(`my name is ${user.name}`) 
    }
}
const normalUser={
    name:'jobayar'
}
const adminUser={
    name:'jobayar',
    role:"admin"
}
getUser(normalUser)

    //
}