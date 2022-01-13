//change the html using id selector
function changeContent() {
  //select the target
  document.getElementById("heading").innerHTML = "Hello.Content is changed";
}

//changing font
function getfont() {
  document.getElementById("test").style.fontSize = "30px";
}

function toggleoff() {
  document.getElementById("toggle").style.display = "none";
}

function toggleon() {
  document.getElementById("toggle").style.display = "block";
}

function insert_row() {
  let x = document.getElementById("sampletable").insertRow();
  let y = x.insertCell(0);
  let z = x.insertCell(1);

  y.innerHTML = "New Row-1st cell";
  z.innerHTML = "New Row-2nd cell";
}
