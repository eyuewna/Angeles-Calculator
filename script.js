function getCalcHistory() {
    return document.getElementById("history-text");
  }
  
  function printCalcHistory(text) {
    getCalcHistory().innerText = text;
  }
  
  function getCalcOutput() {
    return document.getElementById("output-text").innerText;
  }
  
  function printCalcOutput(text) {
    document.getElementById("output-text").innerText = text;
  }
  
  function handleButtonClick(buttonId) {
    var output = getCalcOutput();
  
    if (buttonId == "clear") {
      printCalcHistory("");
      printCalcOutput("");
    } else if (buttonId == "backspace") {
      if (output) {
        output = output.slice(0, -1);
        printCalcOutput(output);
      }
    } else if (buttonId == "=") {
      try {
        var result = eval(output);
  
        if (isNaN(result) || result === undefined) {
          result = "error";
          output = "";
        }
  
        printCalcOutput(result);
        printCalcHistory(output);
      } catch (error) {
        result = "error";
        output = "";
        printCalcOutput(result);
        printCalcHistory(output);
      }
    } else {
      if (output.length === 0 && operators.includes(buttonId)) {
        printCalcOutput("");
        printCalcHistory("");
      } else {
        output = hasResult || output === "error" ? buttonId : output + buttonId;
  
        hasResult = false;
        printCalcOutput(output);
      }
    }
  }
  
  var operators = ["%", "/", "+", "-", "*"];
  var hasResult = false;
  var calcButtons = document.getElementsByClassName("calc-button");
  
  for (var i = 0; i < calcButtons.length; i++) {
    calcButtons[i].addEventListener("click", function () {
      handleButtonClick(this.id);
    });
  }  