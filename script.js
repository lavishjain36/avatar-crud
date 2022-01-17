const time = 1000;

//Raising a dough
function raiseDough(callback) {
  console.log("Waiting for dough...");
  setTimeout(() => {
    console.log("Dough is ready!");
    callback();
  }, 3 * time);
}

//Rolling a dough
function rollDough(callback) {
  console.log("Rolling dough...");
  setTimeout(() => {
    console.log("Dough is rolled!");
    callback();
  }, 2 * time);
}

//pouring the sauce
function pourSauce(callback) {
  console.log("Pouring sauce...");
  setTimeout(() => {
    console.log("Sauce is poured!");
    callback();
  }, 1 * time);
}

//Add the topping
function addTopping(callback) {
  console.log("Adding topping...");
  setTimeout(() => {
    console.log("Topping is added!");
    callback();
  }, 1 * time);
}

function bakePizza(callback) {
  console.log("Baking pizza...");
  setTimeout(() => {
    console.log("Pizza is baked!");
    callback();
  }, 8 * time);
}

//Deleivering the pizza
function deliverPizza(callback) {
  console.log("Delivering pizza...");
  setTimeout(() => {
    console.log("Pizza is delivered!");
    callback();
  }, 5 * time);
}

// We will Nested One inside another
raiseDough(() => {
  rollDough(() => {
    pourSauce(() => {
      addTopping(() => {
        bakePizza(() => {
          deliverPizza(() => {
            console.log("Your pizzza id Deleivered Successfully");
          });
        });
      });
    });
  });
});

// Callback Hell
