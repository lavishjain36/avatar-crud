function myfun() {
  let x = document.getElementById("heading");
  x.innerHTML = `<h1>Hello World</h1>`;
  x.style.fontSize = "50px";
  x.style.color = "red";
}

// document
//   .getElementsByClassName("btn")[0]
//   .addEventListener("click", function () {
//     // document.getElementsByClassName("list-item")[0].style.color = "red";
//     // document.getElementsByClassName("list-item")[0].innerHTML = "Hello World";
//     let listItem = document.getElementsByClassName("list-item");
//     // console.log(listItem);
//     let firstitem = listItem[0].innerHTML;
//     // console.log(firstitem);

//     // let lengthitem = listItem.length;
//     // console.log(lengthitem);

//     for (let i = 0; i < listItem.length; i++) {
//       listItem[i].style.background = "red";
//       listItem[i].style.color = "white";
//       listItem[i].style.fontSize = "20px";
//       listItem[i].style.padding = "10px";
//     }
//   });

//select the list element
// let liElement = document.getElementsByTagName("li");
// // console.log(liElement);
// let totallength = liElement.length;
// // console.log(totallength);

// let firstelement = liElement[0].innerHTML;
// // console.log(firstelement);
// //append the list item

// for (let li in liElement) {
//   liElement[li].style.background = "red";
//   liElement[li].style.color = "white";
//   liElement[li].style.fontSize = "20px";
//   liElement[li].style.padding = "10px";
// }

// QuerySelectorall
let ulLiElement = document.querySelectorAll("ul li");
console.log(ulLiElement);

let ulItem1 = document.querySelectorAll("ul li.item1");
// console.log(ulItem1);
ulItem1.innerHTML = "Apple";
