{
//
// mapped types

type ArrayNumber={
    height:number;
    width:number;
}
type ArrayString={
    [key in keyof ArrayNumber]:string   //key mens looping variable
                                        
}
// generic mapped
// -------------------
type ArrayString2<T>={
    [key in keyof T]:T[key]
}

const array1:ArrayString2<{ height:string;  width:number }>={
  height:"100",
  width:50,
}
//


}