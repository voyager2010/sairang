let btn = document.getElementById("signUpBtn");

btn.onclick = function () {

    localStorage.setItem("name", document.getElementById("fullName").value);
    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("mobile", document.getElementById("mobile").value);
    localStorage.setItem("password", document.getElementById("password").value);

    alert("Signup Successful");

}

