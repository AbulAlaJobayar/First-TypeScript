{
    // opp inheritence
    class Parent {
        name: string;
        age: number;
        address: string;
        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHourse: number) {
            console.log(`${this.name} will sleep for ${numOfHourse} hour`)
        }
    }
// --------------------------------------------------------------------------


    class Student extends Parent {
        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        }
    }

    const student = new Student("mr.x", 20, "khulna")
    student.getSleep(103)

// --------------------------------------------

    class Teacher extends Parent {
       
        designation: string;
        constructor(name: string, age: number, address: string, designation: string) {
            super(name,age,address)
            this.designation = designation
        }
      
        takeClass(numOfHourse: number) {
            console.log(`${this.name} will take class ${numOfHourse} hour`)
        }
    }
    const teacher = new Teacher("mr.y", 20, "khulna", "professor")
    teacher.takeClass(10)


    //

}