/*function showMessage(message) {
  console.log(message);
}

function calc(num1, num2) {
  return num1 + num2;
}

function customError() {
  throw new Error('Error');
}
*/

function showMessage(message: string): void {
  console.log(message);
}
showMessage("Hello");

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

calc(1, 2);

function customError(): never {
  throw new Error("Error");
}

customError();
