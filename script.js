const submitBtn = document.querySelector(".submit-btn");
const writtenEmail = document.querySelector(".written-email");




submitBtn.addEventListener('click', function() {
    event.preventDefault();
    submitForm();
});


function submitForm(){
    const emailInput = document.querySelector("#email").value;
    const error = document.querySelector(".error");
    const signUpEnd = document.querySelector(".sign-up-end");
    const signUpStart = document.querySelector(".sign-up-start");
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailInput === ""){
        error.classList.add("hidden");
        return;
    }

    if (!emailRegex.test(emailInput)) {
        error.classList.remove("hidden");
        return;
    }

    writtenEmail.innerHTML = emailInput;

    signUpEnd.classList.remove("hidden");
    signUpStart.classList.add("hidden");
};
