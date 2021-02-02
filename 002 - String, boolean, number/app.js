var button = document.querySelector("button");
var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");
function add(num1, num2, phrase, showResult) {
    if (showResult) {
        var result = num1 + num2;
        console.log(phrase + result);
    }
    else {
        console.error("Condition is not true!");
    }
}
var phrase = "The result is: ";
var printResult = true;
button.addEventListener('click', function () {
    add(+input1.value, +input2.value, phrase, printResult);
});
