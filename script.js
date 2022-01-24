//Write the logic to Get the data
async function getUser() {
  let users;
  try {
    const data = await fetch(
      "https://61ee6cd4d593d20017dbae04.mockapi.io/users/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    users = await data.json();
    // console.log(users);
  } catch (error) {
    console.log(error);
  }
  return users;
}

// getUser();

async function displayUser(user) {
  let users = await getUser();
  //   console.log(users);
  const userList = document.querySelector(".user-list");
  userList.innerHTML = "";
  users.forEach((user) => {
    // console.log(user.name);
    userList.innerHTML += `
    <div class="user-container">
    <img  class="user-avatar" src="${user.avatar}" alt="${user.name}">
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

displayUser();

//Write the logic to delete the data
async function deleteUser(id) {
  try {
    const data = await fetch(
      `https://61ee6cd4d593d20017dbae04.mockapi.io/users/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const users = await data.json();
    console.log(users);
    displayUser();
  } catch (error) {
    console.log(error);
  }
}

async function addUser() {
  const userName = document.querySelector(".add-user-name").value;
  const userAvatar = document.querySelector(".add-user-avatar").value;

  const data = await fetch(
    "https://61ee6cd4d593d20017dbae04.mockapi.io/users/",
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
  displayUser();
}

async function edit() {}
