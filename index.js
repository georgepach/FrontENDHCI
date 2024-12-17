function validateForm() {
    let valid = true;

 
    document.querySelectorAll(".error").forEach((e) => (e.textContent = ""));


    let name = document.getElementById("name").value;
    if (name.length < 3) {
        document.getElementById("nameError").textContent = "Name must be at least 3 characters long.";
        valid = false;
    }

    let email = document.getElementById("email").value;
    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").textContent = 'Email must contain "@" and "."';
        valid = false;
    }

    let dob = document.getElementById("date").value;
    if (!dob) {
        document.getElementById("dobError").textContent = "Date of Birth is required.";
        valid = false;
    } else {

        let dobDate = new Date(dob);
        let today = new Date();
        if (dobDate >= today) {
            document.getElementById("dobError").textContent = "Date of Birth must be in the past.";
            valid = false;
        }
    }

    let genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {
        document.getElementById("genderError").textContent = "Please select a gender.";
        valid = false;
    }

    let terms = document.getElementById("check-agree").checked;
    if (!terms) {
        document.getElementById("termsError").textContent = "You must agree to the terms and conditions.";
        valid = false;
    }

    if (valid) {
        alert("SIGNUP SUCCESSFULLY");
    }

    return valid;
}
