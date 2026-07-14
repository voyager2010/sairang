let btn = document.getElementById("signUpBtn");

btn.onclick = function () {

    localStorage.setItem("name", document.getElementById("fullName").value);
    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("mobile", document.getElementById("mobile").value);
    localStorage.setItem("password", document.getElementById("password").value);

    alert("Signup Successful");

}

let password = document.getElementById("password");
let eyeIcon = document.getElementById("eyeIconPassword");

eyeIcon.onclick = function () {

    if (password.type === "password") {
        password.type = "text";
        eyeIcon.src = "./../images/show.png";
    } else {
        password.type = "password";
        eyeIcon.src = "./../images/hide.png";
    }

};

let confirmpassword = document.getElementById("confirm-password");
let eyeIconConfrimPassword = document.getElementById("eyeIconConfrimPassword");

eyeIconConfrimPassword.onclick = function () {

    if (confirmpassword.type === "password") {
        confirmpassword.type = "text";
        eyeIconConfrimPassword.src = "./../images/show.png";
    } else {
        confirmpassword.type = "password";
        eyeIconConfrimPassword.src = "./../images/hide.png";
    }

};