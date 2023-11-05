{
 //
//  type assertion
// -----------------------
    let anything:any;
    anything='next level web Development';
    anything=true;
//   (anything as string)
(anything as number)

const kgtoGm=(value:string | number):string|number|undefined=>{
if(typeof value ==="string"){
    const convert=parseFloat(value)*1000;
    return convert
}
else if(typeof value ==="number"){
return value*1000
}
}

// const result=kgtoGm(1000) as number
const result=kgtoGm('1000') as string
console.log(result)
 type CustomError={
    message:string
 }
try{

}catch(error){
console.log((error as CustomError).message)
}





//
}