const contactForm = document.getElementById("contactForm");

const successMessage = document.getElementById("successMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let phone = document.getElementById("phone").value.trim();

    let subject = document.getElementById("subject").value;

    let message = document.getElementById("message").value.trim();


    // Name validation

    if (name === "") {

        alert("Please enter your name.");

        return;

    }


    // Email validation

    if (email === "") {

        alert("Please enter your email.");

        return;

    }


    // Phone validation

    if (phone === "") {

        alert("Please enter your phone number.");

        return;

    }


    if (phone.length < 10) {

        alert("Please enter a valid phone number.");

        return;

    }


    // Subject validation

    if (subject === "") {

        alert("Please select a subject.");

        return;

    }


    // Message validation

    if (message === "") {

        alert("Please enter your message.");

        return;

    }


    // Success message

    successMessage.innerHTML =
        "✓ Thank you, " + name +
        "! Your message has been received. We will get back to you soon.";


    // Clear form

    contactForm.reset();

});