function merge<T,U> (objA:T,objB:T){
    return Object.assign(objA,objB);
}

const mergedObj=merge({name:'Ali',hobbies:['sports']},{age:23});
console.log(mergedObj.age);