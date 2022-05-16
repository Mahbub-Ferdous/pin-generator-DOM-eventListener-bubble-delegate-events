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
// pin matcher keypad click handler by using className and for..of loops for interactive
const button = document.getElementsByClassName("button");
for (const btn of button) {
  btn.addEventListener("click", (e) => {
    const buttonValue = e.target.innerText;
    const calcField = document.getElementById("calcField");
    if (isNaN(buttonValue)) {
      // if click element was not a number than this happend and if this was 'C' than it will be clear the output field
      if (buttonValue == "C") {
        calcField.value = "";       // empty string for time to time clear the field
      }
    } else {
      const previousValue = calcField.value;
      calcField.value = previousValue + buttonValue; // cause string plus string like '5'+'5'='55';
    }
  });
}

// we want to hidden two notification by using both className for..of loop and display=none: 
const notification = document.getElementsByClassName("notify");
for (const notify of notification) {
  notify.style.display = "none";
}

// 'click' handler for "submit button" when generated pin and typed pin same or not:
document.getElementById("submit-button").addEventListener("click", () => {
  const generatedPin = document.getElementById("generateField").value;
  const typedPin = document.getElementById("calcField").value;
  const notifyTwo = document.getElementById("notifyTwo"); // catch the notification by using id 
  const notifyOne = document.getElementById("notifyOne"); // catch the notification by using id
  if (generatedPin == typedPin) {
    notifyTwo.style.display = "block"; // only show the notifyTwo and 
    notifyOne.style.display = "none"  // for clear the notification alert
  } else {
    notifyOne.style.display = "block";
    notifyTwo.style.display = "none"; // for clear the notification alert
  }
});
