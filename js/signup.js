let btn = document.getElementById("signUpBtn");

const name = document.getElementById("fullName");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirm-password");

const eyeIcon = document.getElementById("eyeIconPassword");
const eyeIconConfrimPassword = document.getElementById("eyeIconConfrimPassword");

btn.onclick = function () {
    if (
        name.value.trim() === "" ||
        email.value.trim() === "" ||
        mobile.value.trim() === "" ||
        password.value.trim() === "" ||
        confirmpassword.value.trim() === ""
    ) {
        alert("Please fill all fields!");
        return;
    }

    if (mobile.value.length !== 10) {
        alert("Please enter a valid 10-digit mobile number!");
        return;
    }


    if (password.value !== confirmpassword.value) {
        alert("Passwords do not match!");
        return;
    }

    let user = {
        name: name.value,
        email: email.value,
        mobile: mobile.value,
        password: password.value
    };


    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup Successful!");


    name.value = "";
    email.value = "";
    mobile.value = "";
    password.value = "";
    confirmpassword.value = "";


    password.type = "password";
    confirmpassword.type = "password";
    eyeIcon.src = "./../images/hide.png";
    eyeIconConfrimPassword.src = "./../images/hide.png";


};


eyeIcon.onclick = function () {
    if (password.type === "password") {
        password.type = "text";
        eyeIcon.src = "./../images/show.png";
    } else {
        password.type = "password";
        eyeIcon.src = "./../images/hide.png";
    }
};


eyeIconConfrimPassword.onclick = function () {
    if (confirmpassword.type === "password") {
        confirmpassword.type = "text";
        eyeIconConfrimPassword.src = "./../images/show.png";
    } else {
        confirmpassword.type = "password";
        eyeIconConfrimPassword.src = "./../images/hide.png";
    }
};

