var url = "https://61ea3a267bc0550017bc65e7.mockapi.io/users";

// HTTP Method=>GET (READ THE DATA)
function getData() {
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

// getData();

//HTTP Method=>Send the data (CREATE)
// POST=>
function createData() {
  let data = {
    name: "kohn",
    email: "kohn@gmail.com",
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

// createData();
getData();

// 3.Http Method:PUT
// To update the data
function updateData() {
  let data = {
    name: "Sindhu",
    email: "sindhunana@gmail.com",
  };
  fetch(url + "/1", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

updateData();

// 4.Http Method:DELETE
// To delete the data
function deleteData() {
  fetch(url + "/17", {
    method: "DELETE",
  })
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

deleteData();
