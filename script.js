let a, b, c, d;

PromptUser("Input First value", (err, value1) => {
  if (err) {
    return handleError(err);
  }
  a = Number(value1);
  PromptUser("Input Second value", (err, value2) => {
    if (err) {
      return handleError(err);
    }
    b = Number(value2);
    PromptUser("Input Third value", (err, value3) => {
      if (err) {
        return handleError(err);
      }
      c = Number(value3);
      PromptUser("Input Fourth value", (err, value4) => {
        if (err) {
          return handleError(err);
        }
        d = Number(value4);
        document.body.append(`The sum is ${a + b + c + d}`);
      });
    });
  });
});

function handleError(err) {
  document.body.append(`Error ${err}`);
}

function PromptUser(question, callback) {
  const wrapper = document.createElement("div");
  const text = document.createElement("p");
  const input = document.createElement("input");
  const cancel = document.createElement("button");
  const confirm = document.createElement("button");

  confirm.innerHTML = "Ok";
  cancel.innerHTML = "Cancel";
  text.innerHTML = question;

  wrapper.appendChild(text);
  wrapper.appendChild(input);
  wrapper.appendChild(cancel);
  wrapper.appendChild(confirm);
  document.body.appendChild(wrapper);

  confirm.addEventListener("click", () => {
    callback(undefined, input.value);
    document.body.removeChild(wrapper);
  });

  cancel.addEventListener("click", () => {
    callback(new Error("User canceled"), undefined);
    document.body.removeChild(wrapper);
  });
}
