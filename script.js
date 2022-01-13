function clear() {
  document.getElementById("first").value = "";
  document.getElementById("second").value = "";
}
function add() {
  let num1 = document.getElementById("first").value;
  let num2 = document.getElementById("second").value;
  let result = parseInt(num1) + parseInt(num2);
  console.log(result);

  let res = document.getElementsByClassName("output")[0];
  res.innerHTML = `Addtion is ${result}`;
  //clear the fields in the form
  clear();
}

function sub() {
  let num1 = document.getElementById("first").value;
  let num2 = document.getElementById("second").value;
  let result = parseInt(num1) - parseInt(num2);
  console.log(result);

  let res = document.getElementsByClassName("output")[0];
  res.innerHTML = `Subtraction is ${result}`;
  clear();
}

function mul() {
  let num1 = document.getElementById("first").value;
  let num2 = document.getElementById("second").value;
  let result = parseInt(num1) * parseInt(num2);
  console.log(result);

  let res = document.getElementsByClassName("output")[0];
  res.innerHTML = `Multiplication is ${result}`;
  clear();
}

function div() {
  let num1 = document.getElementById("first").value;
  let num2 = document.getElementById("second").value;
  let result = parseInt(num1) / parseInt(num2);
  console.log(result);

  let res = document.getElementsByClassName("output")[0];
  res.innerHTML = `Division is ${result}`;
  clear();
}
