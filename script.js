// Generate a random number
let y = Math.floor(Math.random() * 10 + 1);
console.log(y);

var guess = 1;
document.getElementById("submitguess").onclick = function () {
  //Select the input element Number
  let x = document.getElementById("GuessField").value;
  // console.log(x);

  if (x == y) {
    alert(
      "Congratulation.You guessed it right Number in " + guess + " guesses"
    );
  } else if (x > y) {
    guess++;
    alert("Sorry! Enter a smaller number");
  } else {
    guess++;
    alert("Sorry! Enter a larger number");
  }
};
