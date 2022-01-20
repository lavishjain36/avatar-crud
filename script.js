//select the target element
let btn = document.getElementById("btn");
let data = document.getElementById("data");

const url = "https://www.breakingbadapi.com/api/quote/random";

//add an event listener to the target element
btn.addEventListener("click", async function () {
  data.innerHTML = "Loading....";
  //write your logic here
  try {
    //fetch the data
    let res = await fetch(url);
    let object = await res.json();
    // console.log(object[0].author);
    data.innerHTML = `
    <h1>${object[0].author}</h1>
    <p>${object[0].quote}</p>
    <p>${object[0].series}</p>`;
  } catch (error) {
    console.log(error);
  }
});
