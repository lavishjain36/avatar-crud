const button = document.querySelector(".button");
button.addEventListener("click", () => {
  //take the input value via input form
  const text = document.querySelector(".text");
  //   console.log(text.value);

  let newList = document.createElement("li");
  newList.innerHTML = text.value;
  let res = document.querySelector(".list");
  console.log(res.appendChild(newList));
});
