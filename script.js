const buttons = document.querySelectorAll('.button');
const result = document.getElementById('result');
const del = document.getElementById('del');
const reset = document.getElementById('reset');
const equals = document.getElementById('equals');

// variable to store input data
let currentInput = "";

// function for updating display
function updateDisplay(){
  result.value = currentInput;
}
// adding foreach method to add event listeners in every button.
buttons.forEach( (button) => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if(value !== "DEL" && value !== "RESET" && value !== '='){
      currentInput += value;
      updateDisplay();
    }
  });
});

// slice method to remove the last input element using event handlers.
del.addEventListener('click', () => {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
})

reset.addEventListener('click', () => {
  currentInput = "";
  updateDisplay();
})

equals.addEventListener('click', (event) => {
  // using try and catch for handling errors.
  try{
    currentInput = eval(currentInput);
    updateDisplay();
  } catch (error) {
    currentInput = "Wrong input!";
    updateDisplay();
  }
});