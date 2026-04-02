function toggleCollapse() {
  document.querySelector('.navbar').classList.toggle('collapsed');
}
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const gender = document.querySelector('input[name="gender"]:checked');

  if(fullName && email && phone && gender) {
    document.getElementById("message").textContent = 
      `Contact submitted successfully! Gender: ${gender.value}`;
    document.getElementById("message").style.color = "green";
    document.getElementById("contactForm").reset();
  } else {
    document.getElementById("message").textContent = "Please fill in all required fields.";
    document.getElementById("message").style.color = "red";
  }
});

function viewDetails(name) {
  alert("Viewing details for " + name);
}
function editContact(name) {
  alert("Editing contact: " + name);
}
function deleteContact(name) {
  const confirmDelete = confirm("Are you sure you want to delete " + name + "?");
  if (confirmDelete) {
    alert(name + " deleted (placeholder action).");
  }
}