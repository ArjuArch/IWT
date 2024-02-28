function fun() {
    // Get references to form fields
    var nameInput = document.getElementById("name");
    var ageInput = document.getElementById("age");
    var emailInput = document.getElementById("email");
    var mobInput = document.getElementById("mob");
    var passwordInput = document.getElementById("password");

    // Regular expressions for validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^[6-9][0-9]{9}$/;
    var nameRegex = /^[a-zA-Z\s]+$/;

    // Validation checks
    var errors = [];

    if (nameInput.value.trim() === "") {
      errors.push("Name is required.");
    } else if (!nameRegex.test(nameInput.value)) {
      errors.push("Please enter a valid name.");
    }

    if (ageInput.value.trim() === "") {
      errors.push("Age is required.");
    } else if (
      isNaN(ageInput.value) ||
      ageInput.value < 0 ||
      ageInput.value > 150
    ) {
      errors.push("Age must be a valid number between 0 and 150.");
    }

    if (emailInput.value.trim() === "") {
      errors.push("Email is required.");
    } else if (!emailRegex.test(emailInput.value)) {
      errors.push("Please enter a valid email address.");
    }

    if (mobInput.value.trim() === "") {
      errors.push("Mobile number is required.");
    } else if (!phoneRegex.test(mobInput.value)) {
      errors.push(
        "Please enter a valid 10-digit mobile number starting with 6-9."
      );
    }

    if (passwordInput.value.length < 8) {
      errors.push("Password must be at least 8 characters long.");
    }

    // Display errors or submit the form
    if (errors.length > 0) {
      alert(errors.join("\n"));
      return false; // Prevent form submission
    } else {
      alert("Form submitted successfully!");
      return true; // Allow form submission
    }
  }