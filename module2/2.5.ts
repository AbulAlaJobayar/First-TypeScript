{
    //
    // function generic



    const createArray = (params: string): string[] => {
        return [params]
    }
    const createArrayWithGeneric = <T>(params: T): T[] => {
        return [params]
    }
    const res1 = createArray('bangladesh');
    console.log(res1)
    const res2 = createArrayWithGeneric<string>("jobayar")
    console.log(res2)
    type User = {
        id: number; name: string;
    }
    const res3 = createArrayWithGeneric<User>({ id: 123, name: 'jobayar' })
    console.log(res3)




    // function generic tuple

    const createArray1WithTuple = (params1: string, params2: number): [string, number] => {
        return [params1, params2]
    }
    const createArrayWithGenericTuple = <T, X>(params1: T, params2: X): [T, X] => {
        return [params1, params2]
    }
    const res10 = createArray1WithTuple('bangladesh', 2222222);
    console.log(res10)
    const res20 = createArrayWithGenericTuple<string, number>("jobayar", 122222)
    console.log(res20)


    // fix generic Function

    const addCourseToStudent = <T>(student: T) => {
        const course = "Next Level Web Development"
        return {
            ...student, course
        }
    }
type Student={
    id:number;name:string;email:string,fee:number;
}
    const res11 = addCourseToStudent<Student>({ id: 111, name: 'jobayar', email: 'jobayar@gmail.com', fee: 5000 })


console.log(res11)






    //
}