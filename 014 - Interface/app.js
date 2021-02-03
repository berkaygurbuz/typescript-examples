var User1;
User1 = {
    name: 'Berkay',
    age: 30,
    greet: function (phrase) {
        console.log(phrase + " " + this.name);
    }
};
User1.greet("Hi there, I am ");
