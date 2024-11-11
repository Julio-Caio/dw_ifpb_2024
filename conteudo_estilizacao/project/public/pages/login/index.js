document.getElementById("inputEmail").addEventListener("input", function () {
    const emailField = this;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorMessage = document.getElementById("emailError");
  
    if (!emailRegex.test(emailField.value)) {
      if (!errorMessage) {
        const errorElement = document.createElement("div");
        errorElement.id = "emailError";
        errorElement.style.color = "red";
        errorElement.textContent = "Por favor, insira um e-mail válido.";
        emailField.insertAdjacentElement("afterend", errorElement);
      }
    } else {
      if (errorMessage) {
        errorMessage.remove();
      }
    }
  });
  