function getValues() {
  const value1 = parseFloat(document.getElementById("value1").value);
  const value2 = parseFloat(document.getElementById("value2").value);
  return { value1, value2 };
}

function add() {
  const { value1, value2 } = getValues();
  document.getElementById("result").innerText = value1 + value2;
}

function sub() {
  const { value1, value2 } = getValues();
  document.getElementById("result").innerText = value1 - value2;
}

function mul() {
  const { value1, value2 } = getValues();
  document.getElementById("result").innerText = value1 * value2;
}

function div() {
  const { value1, value2 } = getValues();
  if (value2 === 0) {
    alert("Cannot divide by zero!");
    return;
  }
  document.getElementById("result").innerText = value1 / value2;
}

function squ() {
  const value1 = parseFloat(document.getElementById("value1").value);
  document.getElementById("result").innerText = value1 * value1;
}

function cube() {
  const value1 = parseFloat(document.getElementById("value1").value);
  document.getElementById("result").innerText = value1 * value1 * value1;
}

function zerofunction() {
  document.getElementById("value1").value = "";
  document.getElementById("value2").value = "";
  document.getElementById("result").innerText = "0";
}
