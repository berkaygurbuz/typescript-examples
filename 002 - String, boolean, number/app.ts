const button=document.querySelector("button");
const input1=document.getElementById("number1")! as HTMLInputElement;
const input2=document.getElementById("number2")! as HTMLInputElement;


function add(num1:number,num2:number,phrase:string,showResult:boolean){
    if(showResult){
        let result=num1+num2;
        console.log(phrase+result);
    }
    else{
        console.error("Condition is not true!");
        
    }

}


const phrase="The result is: ";
const printResult=true;

button.addEventListener('click',function(){

    add(+input1.value,+input2.value,phrase,printResult);

});