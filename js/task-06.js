const input = document.querySelector("#validation-input");
const requiredLength = Number(input.dataset.length);

input.addEventListener("blur", () => {
  if (input.value.length === requiredLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
