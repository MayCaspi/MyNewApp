document.addEventListener("DOMContentLoaded", () => {
    // Get the calculator display element
    const monitor = document.querySelector(".monitor");
  
    // Get all buttons
    const buttons = document.querySelectorAll(".but, .butOperators,.butWide");
  
    // Initialize the calculator memory
    let memory = 0;
    let calculation = 0;
  
    // Event listener for each button
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        handleButtonClick(button.innerText);
      });
    });
  
    // Function to handle button clicks
    function handleButtonClick(value) {
      console.log(value);
      switch (value) {
        case "=":
          calculateResult();
          break;
        case "C":
          clearDisplay();
          break;
        case "⌫":
          backspace();
          break;
        case "M+":
          addToMemory();
          break;
        default:
          appendToDisplay(value);
      }
    }
    // Function to calculate and display the result
    function calculateResult() {
      try {
        const result = eval(monitor.innerText);
        monitor.innerText = result;
      } catch (error) {
        monitor.innerText = "Error";
      }
    }
  
    // Function to clear the display
    function clearDisplay() {
      monitor.innerText = "0";
    }
  
    // Function to delete the last character from the display
    function backspace() {
      let currentText = monitor.innerText;
      monitor.innerText = currentText.slice(0, -1);
    }
  
    // Function to add the current value to memory
    function addToMemory() {
      memory += parseFloat(monitor.innerText) || 0;
    }
  
    // Function to append value to the display
    function appendToDisplay(value) {
      // If the current display is "0", replace it with the new value
      if (monitor.innerText === "0") {
        monitor.innerText = value;
      } else {
        monitor.innerText += value;
      }
    }
  });
  