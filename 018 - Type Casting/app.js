// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
var userInputElement = document.getElementById('user-input');
if (userInputElement) {
    userInputElement.value = 'Hi there!';
}
/*or
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
userInputElement.value='Hi there!';
*/ 
