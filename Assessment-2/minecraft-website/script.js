// Waits until the whole page is loaded
document.addEventListener("DOMContentLoaded", () => {

  // Gets the form element and message box element
  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("formMessage");

  // When the form is submitted
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Stop the page from reloading

    // Get values from the input fields
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Check if any field is empty
    if (!name || !email || !message) {
      // Show error message
      messageBox.style.display = "block";
      messageBox.style.color = "red";
      messageBox.textContent = "Please fill in all fields.";
      return; // Stop the function
    }

    // Show success message
    messageBox.style.display = "block";
    messageBox.style.color = "green";
    messageBox.textContent = `Thank you, ${name}! Your message has been sent.`;

    // Clear the form
    form.reset();
  });
});
