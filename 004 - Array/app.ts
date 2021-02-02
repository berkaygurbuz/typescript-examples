const person={
    name:'Berkay',
    surname:'Gürbüz',
    age:23,
    hobbies:['Swimming','Reading books','Playing computer games']
}

//print each hobby
for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}