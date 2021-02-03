type Combinable=number|string;


function combine(input1:Combinable,input2:Combinable){
    if(typeof input1==='number' && typeof input2==='number'){
        return input1+input2;
    }
    else{
        return input1.toString()+input2.toString();
    }
    
}

const combineAges=combine(25,26);
console.log(combineAges);

const combineNames=combine('Ali','Veli');
console.log(combineNames);