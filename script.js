const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (validateName() && validateEmail() && validateNumber() && validatePassword() && confirmPass()) {
        alert("Form is submit successfully");
    }
});
function validateName() {
    let name = document.getElementById("fullName").value;
    if (name.length == 0) {
        alert("Please Enter The Full Name");
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        alert("Write Full Name");
        return false;
    }
    name.innerText = "";
    return true;
}
function validateEmail() {
    let email = document.getElementById("email").value;
    if (email.length == 0) {
        alert("Please Enter The Email Address");
        return false;
    }
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        alert("Write Valid Email");
        return false;
    }
    email.innerText = "";
    return true;
}
function validateNumber() {
    let number = document.getElementById("number").value;
    if (number.length == 0) {
        alert("Please Enter the Mobile Number");
        return false;
    }
    if (number.length < 10 || number.length > 10) {
        alert("Mobile Number should contain only 10 digits");
        return false;
    }
    number.innerText = "";
    return true;
}
function validatePassword() {
    let pass = document.getElementById("pass").value;
    if (pass.length == 0) {
        alert("Please Enter The Password");
        return false;
    }
    if (!pass.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)) {
        alert("Password should contain 1 Uppercase 1 Lowercase 1 Digit & 1 Alphabet");
        return false;
    }
    pass.innerText = "";
    return true;
}
function confirmPass() {
    let password = document.getElementById("pass").value;
    let conform = document.getElementById("cpass").value;
    if (password.length != 0) {
        if (password == conform) {
            return true;
        }
        else {
            alert("Confirm Password Not Matched");
            return false;
        }
        //
    }
    else {
        alert("Please Enter Confirm Password");
        return false;
    }
}