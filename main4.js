
let display = document.getElementById('display');
function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calc() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Syntax Error';
  }
  
}
function delete1(){
    display.value = display.value.toString().slice(0, -1);
}