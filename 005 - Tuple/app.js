var person = {
    name: 'Berkay',
    surname: 'Gürbüz',
    age: 23,
    hobbies: ['Swimming', 'Reading books', 'Playing computer games'],
    role: [0, 'Software developer']
};
person.role.push(2, 'editor');
person.role[0] = 3;
console.log(person.role[0]);
console.log(person.role[1]);
