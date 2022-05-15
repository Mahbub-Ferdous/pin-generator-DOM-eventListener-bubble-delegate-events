// pin generate function:
function getPin() {
  // Math.random() generate random number but decimal and Math.round() generate a round number and if we multiple Math.random()*10000 than it will produce 4 integer number
  const pin = Math.round(Math.random() * 10000); // output will be numaric
  const pinString = pin + ""; // so transfer from number to string by using number+ empty strig
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin(); // recursive function call
  }
}
// generate pin button click event handler
document.getElementById("generate-btn").addEventListener("click", () => {
  const pinGenerateField = document.getElementById("generateField");
  const showPin = pinGenerateField.value;
  pinGenerateField.value = getPin();
});
// pin matcher keypad click handler by using className and for..of loops
const button = document.getElementsByClassName("button");
for (const btn of button) {
  btn.addEventListener("click", (e) => {
    const buttonValue = e.target.innerText;
    const calcField = document.getElementById("calcField");
    if (isNaN(buttonValue)) {      // if click element was not a number than this happend and if this was 'C' than it will be clear the output field 
      if (buttonValue == "C") {
        calcField.value = "";
      }
    } else {
      const previousValue = calcField.value;
      calcField.value = previousValue + buttonValue; // cause string plus string like '5'+'5'='55';
    }
  });
}
