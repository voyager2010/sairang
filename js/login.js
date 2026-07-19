let email = document.getElementById("email");
let passwordInput = document.getElementById("userPassword");
let eyeButton = document.getElementById("togglePassword");
let loginbtn = document.getElementById("loginButton");

eyeButton.onclick = function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        eyeButton.src = "./../images/show.png";

    } else {

        passwordInput.type = "password";
        eyeButton.src = "./../images/hide.png";

    }



};


const user = JSON.parse(localStorage.getItem("user"));
const localstorageemail = user.email;
const localstoragepassword = user.password;



loginbtn.onclick = function () {

    
    if (
        email.value.trim() === "" ||
        passwordInput.value.trim() === "" 
    ) {
        alert("Please fill all fields!");
        return;
    }

    const emailID = email.value;
    const password = passwordInput.value;

    if (localstorageemail === emailID && localstoragepassword === password) {
        alert("Login Successful!");

        window.location.href = "./../index.html";
        

        email.value = "";
        passwordInput.value = "";

        return;
    }
    else {
        alert("Invalid Email and Password")
    }


}













