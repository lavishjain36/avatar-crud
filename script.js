//select the cat element
const cat_btn = document.getElementById("cat_btn");
const cat_result = document.getElementById("cat_result");

//select the dog element
const dog_btn = document.getElementById("dog_btn");
const dog_result = document.getElementById("dog_result");

cat_btn.addEventListener("click", function () {
  fetch("https://aws.random.cat/meow")
    .then((response) => response.json())
    .then((data) => {
      cat_result.innerHTML = `<img src="${data.file}" alt="cat" width="300" height="250">`;
    });
});

dog_btn.addEventListener("click", function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dog_result.innerHTML = `<img src="${data.message}" alt="dog" width="300" height="250">`;
    });
});
