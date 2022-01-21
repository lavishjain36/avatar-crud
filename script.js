//function to create an Html element
function createNode(element) {
  return document.createElement(element);
}

//Function to append the element
function append(parent, el) {
  return parent.appendChild(el);
}

//select the element
const ul = document.getElementById("imglst");
const url = "https://randomuser.me/api/?gender=male&results=100";

fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    let authors = data.results;
    console.log(authors);
    return authors.map((author) => {
      let li = createNode("li");
      let img = createNode("img");
      let span = createNode("span");
      img.src = author.picture.large;
      // span.innerHTML = `${author.name.first} ${author.name.last}`;
      append(li, img);
      append(li, span);
      append(ul, li);
    });
  })
  .catch((err) => {
    console.log(err);
  });
