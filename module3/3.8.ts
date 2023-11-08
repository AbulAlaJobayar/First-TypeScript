{
    //
    // polymorphism


    class Person {
        getSleep() {
            console.log(`i am sleeping 8 hours`)
        }
    }

    class Student extends Person {
        getSleep() {
            console.log(`i am sleeping 7 hours`)
        }
    }
    class Developer extends Person {
        getSleep() {
            console.log(`i am sleeping 6 hours`)
        }
    }
const getSleepingHour=(param1:Person)=>{
return param1.getSleep()
}

const person= new Person();
const student=new Student();
const developer=new Developer()

getSleepingHour(person)
getSleepingHour( student)
getSleepingHour( developer)

    //
}


