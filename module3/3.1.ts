{
    //
    //opp
    //opp -class
    
class Animal{
    name:string;
    species:string;
    sound:string;
    constructor(name:string,species:string,sound:string, ){
        this.name=name;
        this.species=species;
        this.sound=sound
    }
makeSound(){
    console.log(`the ${this.name} says ${this.sound}`)
}
}

const dog=new Animal('hunt vai',"dog","gew gew");
const cat= new Animal('parsian vai','cat','mew mew')
cat.makeSound()
dog.makeSound()
    //
// class er short version
class Animal1{
    //    peramitter properties
        constructor(public name:string,public species:string,public sound:string,){}
        makeSound(){
            console.log(`the ${this.species} sound is ${this.sound}`)
        }
    }

    const dog1=new Animal1('punt vai',"dog","gew gew");
    const cat1= new Animal1('parsian vai','cat','mew mew')
    dog1.makeSound()

}