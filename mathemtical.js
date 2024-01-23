document.addEventListener("DOMContentLoaded", () => {
    // Get the calculator display element
    const monitor = document.querySelector(".monitor");
    const montiorBox = document.getElementById('monitor')
    // Get all buttons
    const buttons = document.querySelectorAll(".but, .butOperators,.butWide");
  
    // Initialize the calculator memory
    let memory = 0
    // Event listener for each button
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        handleButtonClick(button.getAttribute("data-value"));
      });
    });
  
    // Function to handle button clicks
    function handleButtonClick(value) {
      console.log(value)
      switch (value) {
        case "=":
          if (montiorBox.textContent.includes("log"))
          {
            applyLogarithm();
            break;
          }
          if (montiorBox.textContent.includes("ln"))
          {
            applyLan();
            break;
          }
          else;{ 
            calculateResult();
            break;
          }
        case "C":
          clearDisplay();
          break;
        case "⌫":
          backspace();
          break;
        case "M+":
          addToMemory();
          break;
        case "abs(":
          applyAbsoluteValue();
          break;
      
        default:
          appendToDisplay(value);
      }
    }
    function applyAbsoluteValue() {
        const currentValue = parseFloat(monitor.innerText) || 0;
        monitor.innerText = Math.abs(currentValue);
      }
      function applyLogarithm() {
        const currentValue = parseFloat(monitor.innerText) || 0;
        console.log(currentValue)
        monitor.innerText = Math.log10(currentValue);
        
      }
      function applyLan() {
        const currentValue = parseFloat(monitor.innerText) || 0;
        console.log(currentValue)
        monitor.innerText = Math.LN10(currentValue);
        
      }
    
    // Function to calculate and display the result
    function calculateResult() {
      try {
        const result = eval(monitor.innerText);
        monitor.innerText = result;
      } catch (error) {
        console.log(error)
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
      calculation = currentText.slice(0, -1);
      console.log(monitor.innerText)
      if (monitor.innerText == ""){
        monitor.innerText="0"
      }
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
  