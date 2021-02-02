
enum Role{ADMIN,READ_ONLY,AUTHOR};  //it start with 0 to incremetn ADMIN=0, READ_ONLY=1
//also we can declare
//enum Role{ADMIN=5,READ_ONLY=100,AUTHOR='AUTHOR'}

const person={
    name:"Berkay",
    age:23,
    hobbies:["Swimming","Playin computer games"],
    role:Role.ADMIN
};

if(person.role===Role.ADMIN){
    console.log("Role is Admin");
}