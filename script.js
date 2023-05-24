let result = document.getElementById("result");

function appendChar(char) {
  result.value += char;
}

function clearResult() {
  result.value = "";
}

function deleteLastChar() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  try {
    const expression = result.value;
    const answer = eval(expression);
    result.value = answer;
  } catch (error) {
    result.value = "Error";
  }
}
