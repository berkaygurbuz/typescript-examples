function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj = merge({ name: 'Ali', hobbies: ['sports'] }, { age: 23 });
console.log(mergedObj.age);
