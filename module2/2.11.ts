{
    // utility types

    // pick type
    type Person={
        name:string;
        age:number;
        email?:string;
        contactNo:string;
    }
type nameAge=Pick<Person,"name"|"age">

// Omit type

type ContactType=Omit<Person,"name"|'age'>

// Required Type
type PersonRequired=Required<Person>

//Partial
type PersonPartial=Partial<Person>

//ReadOnly
type PersonReadonly=Readonly<Person>

// Record type

const emptyObj:Record<string,unknown>={}

// Record
  // type MyObj = {
  //   a: string;
  //   b: string;
  // };

  type MyObj = Record<string, number>;

  const EmptyObj: Record<string, unknown> = {};

  const obj1:typeof EmptyObj= {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd",
    e: 6,
  };
    //
}

