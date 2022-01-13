function myfun() {
  let array = document.getElementsByTagName("p");
  //   console.log(array);
  for (let i = 0; i < array.length; i++) {
    array[i].style.color = "red";
    array[i].style.fontSize = "20px";
  }
}
