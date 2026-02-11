document.getElementById("appointment-form").onsubmit = (e) => {
    clearErrors();

    let isValid = true;

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();


    // first name validation
    if (!fname) {
        document.getElementById("fname-error").style.display = "inline";
        isValid = false;
    }

    // last name validation
    if (!lname) {
        document.getElementById("lname-error").style.display = "inline";
        isValid = false;
    }
     if (!isValid) {
        e.preventDefault(); 
    }

    return isValid;      
};

function clearErrors() {
    let errors = document.getElementsByClassName("error");
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}

