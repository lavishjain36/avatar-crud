let maxcount = 900;
let smstypfun = () => {
  //get the value of text entered by user with length
  let textEnteredLength = document.querySelector("#text-area").value.length;
  //selec the span tag
  let spanTag = document.querySelector("#chars");
  let reminingCount = maxcount - textEnteredLength;
  spanTag.innerText = reminingCount;
};

//Change password
let changePassword = () => {
  let passwordBox = document.querySelector("#pass-box");
  let theattribute = passwordBox.getAttribute("type");

  if (theattribute === "password") {
    passwordBox.setAttribute("type", "text");
  } else {
    passwordBox.setAttribute("type", "password");
  }
};

//Likes and DIslik
let likesCount = 0;
let dislikesCount = 0;
let total = 0;
let liked = () => {
  likesCount++;
  total++;
  document.querySelector("#likes").innerText = likesCount;
  document.querySelector("#total").innerText = total;
};

let disliked = () => {
  dislikesCount++;
  total++;
  document.querySelector("#dislikes").innerText = dislikesCount;
  document.querySelector("#total").innerText = total;
};
