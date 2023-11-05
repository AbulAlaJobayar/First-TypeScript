{
    //
// generic type

    // const rollNumber:number[]=[3,6,8] ;
    const rollNumber:Array<number>=[3,6,8] ;


    // const mentors:string[]=['mezba','jhankar'];
    const mentors:Array<string>=['mezba','jhankar'];


    // const boolArray:boolean[]=[true,false,true]
    const boolArray:Array<boolean>=[true,false,true]
    

    // reUse genericArray
    type GenericArray1=Array<number>
    type GenericArray2=Array<string>
    type GenericArray3=Array<boolean>
    const rollNumber1:GenericArray1 =[1,2,3,4,5]
    const rollNumber2:GenericArray2 =["ms.x","ms.y"]
    const rollNumber3:GenericArray3 =[true,false]



    // dynamic generic Array


    type GenericDynamicArray<T>=Array<T>

    const rollNumber4:GenericDynamicArray<number> =[1,2,3,4,5]
    const rollNumber5:GenericDynamicArray<string> =["ms.x","ms.y"]
    const rollNumber6:GenericDynamicArray<boolean> =[true,false]
  
// Array Of Object
const arrayOfObject:GenericDynamicArray<{name:string; age:number}>=[
    {
        name:'jobayar',
        age:12
    },
    {
        name:'jobayar',
        age:12
    }
]
// generic tuple
type DynamicGenericTuple<x,y>=[x,y];
const genericTuple: DynamicGenericTuple<string,string>=["mr.x", "mr.y"];
const userWithId: DynamicGenericTuple<number,{name:string;email:string}>=[1234,{name:"jobayar",email:"abc@gmail.com"}];





  //
}