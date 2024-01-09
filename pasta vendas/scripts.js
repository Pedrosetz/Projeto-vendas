const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const telefoneInput = document.querySelector("#Telefone");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if(nameInput.value === "") {
    alert("Por favor coloque seu nome");
    return;
  }
  
  if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("Por favor coloque seu email");
    return;
  }

  if(!validatePassword(passwordInput.value, 8)) {
    alert("A senha precisa de no minimo 8 digitos.")
    return;
  }

  form.submit();

})

function isEmailValid(email) {
  //regex pra validar o email
  const emailRegex = new RegExp(
    /^[a-zA=Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-z]{2,}$/
  );

  if (emailRegex.test(email)) {
    return true;
  }

  return false;
}

function validatePassword(password, minDigits) {
  if(password.length >= minDigits) {
    return true
  }

    return false
}