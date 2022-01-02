var url = "https://61d12cbecd2ee50017cc99a4.mockapi.io/users";

//HTTP METHOD=GET
//Read the data
function getData() {
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
// getData();

//HTTP METHOD=POST
//Create the data
function createData() {
  let data = {
    name: "Eeshani",
    email: "raja@gmail.in",
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
// createData();
// getData();

//HTTP METHOD=PUT
//Update the data
function updateData() {
  let data = {
    name: "Lavish Kumar",
    email: "lavish@gmail.com",
  };

  fetch(url + "/11", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
// updateData();
// getData();

//HTTP METHOD=DELETE
//Delete the data
function deleteData() {
  fetch(url + "/15", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

deleteData();
