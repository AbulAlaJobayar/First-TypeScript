{
    //
type Vehicle={
    bike:string;
    car:string;
    ship:string;
}
// 1st option
type Owner ='bike'|'car'|'ship'
// 2nd Option
type Owner2=keyof Vehicle

const user={
    name:'jobayar',
    age:26,
    address:'khulna'
}

const getPropertyVAlue=<X,Y extends keyof X>(obj:X, key:Y)=>{
return obj[key]
}
const result=getPropertyVAlue(user,'name');
console.log(result)


    //
}