{
    //Promise
    const createPromise=():Promise<string>=>{
        return new Promise<string>((resolve,reject)=>{
            const data :string="something"

            if(data){
                resolve(data)
            }else{
                reject('data cannot find')
            }
        })
    }
    // create calling promise function c
    const showData=async():Promise<string>=>{
        const data:string= await createPromise();
        return data
    }
    showData()
    //

// data load in json placeholder
type ToDo={
    userId:number;
    id:number;
    title:string;
    complete:boolean;
}
const getToDo=async():Promise<ToDo>=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data =await response.json()
   return data
}
getToDo()




}