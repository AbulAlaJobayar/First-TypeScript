{
    //
// Constraints

const addCourseToStudent=<T extends {id:number; name:string;email:string}>(student:T) =>{
const course ="next level web development";
return {
    ...student, course
}
}
 
const student1= addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
}>({
    id:222,
    name:'m.x',
    email:'abc@gmail.com',
    devType:'nwwwar'

})
const student2= addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devOpps: string;
}>({
    id:222,
    name:'m.y',
    email:'bbb@gmail.com',
    devOpps:'bccva'

})

    //
}