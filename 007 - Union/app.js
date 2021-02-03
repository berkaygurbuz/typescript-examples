function combine(input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
var combineAges = combine(23, 26);
console.log(combineAges);
var combineNames = combine('Ali', 'Veli');
console.log(combineNames);
