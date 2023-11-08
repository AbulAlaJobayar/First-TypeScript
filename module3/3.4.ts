{
    //instanceof guard
    class Animal {
        name: string;
        species: string;
        constructor(name: string, species: string) {
            this.name = name;
            this.species = species
        }

makeSound(){
    console.log('i am making Sound')
}

    }
class Dog extends Animal{
    constructor(name:string,species:string){
        super(name,species)
    }
    makeBark(){
        console.log('i am barking')
    }
}

class Cat extends Animal{
    constructor(name:string, species:string){
        super(name,species)
    }
    makeMeaw(){
       console.log('i am meaw')
    }
}
const getAnimal=(animal:Animal)=>{
    if(animal instanceof Dog){
animal.makeBark()
    }
    else if(animal instanceof Cat){
animal.makeMeaw()
    }else{
        animal.makeSound();
    }
}


const dog=new Dog('Dog bhai','Dog')
const cat =new Cat('Cat Bhai',"cat")
getAnimal(dog)
    //
}