function validateEmailOption() {
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const option = document.getElementById("option").value;
  const sex = document.getElementById("sex").value;
  
 
  // Проверяем, что переданная опция валидна
  const validOptions = ["Admin", "Customer", "Seller"];
  if (!validOptions.includes(option)) {
    alert("Недопустимая опция")
    // document.getElementById("result").innerText = "Недопустимая опция";
    return false;
  }

  // Проверяем валидность имени и фамилии
  if (!firstName || !lastName) {
    document.getElementById("result").innerText = "Введите имя и фамилию";
    return false;
  }



  const fullName = [firstName, lastName];

  localStorage.setItem("userRole", option);
  localStorage.setItem("fullName", fullName.join(" "));
  localStorage.setItem("sex", sex);

 
  window.location.href = "index2.html";

  localStorage.setItem("modalShown", "false");
  localStorage.setItem("theme", "");

  return false; 
}