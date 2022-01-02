//Write a logic to get the data
async function getUsers() {
  let users;
  try {
    const data = await fetch(
      "https://61d12cbecd2ee50017cc99a4.mockapi.io/users",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    users = await data.json();
    // console.log(users);
  } catch (err) {
    console.log(err);
  }
  return users;
}
// getUsers();

//write a functionality to display the data of users
async function displayUsers() {
  let users = await getUsers();
  // console.log(users);
  const userList = document.querySelector(".user-list");
  userList.innerHTML = "";

  users.forEach((user) => {
    // console.log(user.name);
    //Load the data from an api using template literal
    userList.innerHTML += `
    <div class="user-container">
    <img class="user-avatar" src="${user.avatar}" alt="${user.name}">
    <div>
    <h3>${user.name}</h3>
    <p>${user.createdAt}</p>
    <button onClick="deleteUser(${user.id})">Delete</button>
    <button onClick="editUser(${user.id})">Edit</button>
    </div>
     
  
  </div>
  
  `;
  });
}

displayUsers();

//Write a functionality to delete the user
async function deleteUser(id) {
  try {
    const data = await fetch(
      `https://61d12cbecd2ee50017cc99a4.mockapi.io/users/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const users = await data.json();
    console.log(users);
    displayUsers();
  } catch (err) {
    console.log(err);
  }
}

//use POST
async function addUser() {
  const userName = document.querySelector(".add-user-name").value;
  const userAvatar = document.querySelector(".add-user-avatar").value;
  // console.log(userName, userAvatar);
  // 1.method=>POST
  // 2.Stringify the data

  const data = await fetch(
    "https://61d12cbecd2ee50017cc99a4.mockapi.io/users",
    {
      method: "POST",
      body: JSON.stringify({
        name: userName,
        avatar: userAvatar,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  displayUsers();
}
addUser();

// EDIT,PUT
