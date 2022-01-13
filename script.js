const button = document.querySelector(".button");

button.addEventListener("click", function () {
  //take the input the value
  const text = document.getElementsByClassName("text")[0].value;
  console.log(text);
  //create a new li
  const li = document.createElement("li");
  //add the text to the li
  // console.log(li);
  li.innerText = text;
  document.querySelector(".list").appendChild(li);
  //clear the input
  document.getElementsByClassName("text")[0].value = "";
});

// append=?string like input
