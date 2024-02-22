const submitBtn = document.querySelector(".submit-btn");
const writtenEmail = document.querySelector(".written-email");




submitBtn.addEventListener('click', function() {
    event.preventDefault();
    submitForm();
});


function submitForm(){
    const emailInput = document.querySelector("#email");
    const error = document.querySelector(".error");
    const signUpEnd = document.querySelector(".sign-up-end");
    const signUpStart = document.querySelector(".sign-up-start");
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailInput.value === ""){
        error.classList.add("hidden");
        emailInput.style.backgroundColor = "";
        emailInput.style.borderColor = "";
        return;
    }

    if (!emailRegex.test(emailInput.value)) {
        error.classList.remove("hidden");
        emailInput.style.backgroundColor = "tomato";
        emailInput.style.borderColor = "red";
        return;
    }


    writtenEmail.innerHTML = emailInput.value;

    signUpEnd.classList.remove("hidden");
    signUpStart.classList.add("hidden");
};

