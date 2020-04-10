class Person{
   constructor(name,age){
       this.name = name;
       this.age = age;
   }

   greetings(){
       console.log(`hai my name is ${this.name} and age is ${this.age}`)
   }
}

module.exports = Person;