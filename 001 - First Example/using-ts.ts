const button = document.querySelector("button");
const input1=document.getElementById("number1")! as HTMLInputElement;
const input2=document.getElementById("number2")! as HTMLInputElement;

function add(num1:number,num2:number){
    return num1+num2;
}

button.addEventListener("click",function(){
    console.log(add(+input1.value,+input2.value));
});