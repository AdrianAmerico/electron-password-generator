const pass = document.querySelector("#pass");
const newPassword = document.querySelector("#newPassword");

function generatePass() {
  newPassword.innerHTML = "";
  if (!pass.value) return alert("Digite um tamanho válido");
  if (pass.value > 35) return alert("Digite um tamanho válido");
  let charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZI0123456789";
  let password = "";

  for (let i = 0, n = charset.length; i < pass.value; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }

  let result = document.createTextNode(password);
  return newPassword.appendChild(result);
}
