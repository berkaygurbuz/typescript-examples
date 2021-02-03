interface Person{
    name:string;
    age:number;

    greet(phrase:string):void;
}
let User1:Person;

User1= {
    name:'Berkay',
    age:30,
    greet(phrase:string){
        console.log(phrase+ " "+ this.name);
    }
};

User1.greet("Hi there, I am ");