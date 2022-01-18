let numbers = [
  " ZERO",
  " ONE",
  " TWO",
  " THREE",
  " FOUR",
  " FIVE",
  " SIX",
  " SEVEN",
  " EIGHT",
  " NINE",
];

let convertToWordNumber = (str) => {
  let tempstr = "";
  for (let i = 0; i < str.length; i++) {
    let digit = Number(str.charAt(i));
    tempstr += numbers[digit];
  }
  return tempstr;
};

//Get the input box
let numberBox = document.querySelector("#number");
numberBox.addEventListener("keyup", function () {
  let textEntered = numberBox.value;
  console.log(textEntered);
  let stringNumber = convertToWordNumber(textEntered);
  console.log(stringNumber);
  document.querySelector("#text-number").innerHTML = stringNumber;
});
