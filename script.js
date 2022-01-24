var url = "https://61ee6cd4d593d20017dbae04.mockapi.io/users";

//Http method to read the data
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

//POST method
// send the data
function createData() {
  let data = {
    name: "Saran",
    email: "saran@gmail.in",
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

// Update data=>PUT
function updateData() {
  let data = {
    name: "Nijesh",
    email: "nijesh@gmail.com",
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

// updateData();

// Delete
function deleteData() {
  fetch(url + "/11", {
    method: "DELETE",
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

deleteData();
