var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var n = 1;
var x = 1;
function AddRow() {
  var addrown = document.getElementById("show");
  var newrow = addrown.insertRow(n);

  list1[x] = document.getElementById("fname").value;
  list2[x] = document.getElementById("lname").value;
  list3[x] = document.getElementById("email").value;
  list4[x] = document.getElementById("age").value;

  var cell1 = newrow.insertCell(0);
  var cell2 = newrow.insertCell(1);
  var cell3 = newrow.insertCell(2);
  var cell4 = newrow.insertCell(3);

  cell1.innerHTML = list1[x];
  cell2.innerHTML = list2[x];
  cell3.innerHTML = list3[x];
  cell4.innerHTML = list4[x];

  n++;
  x++;
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("age").value = "";
}
