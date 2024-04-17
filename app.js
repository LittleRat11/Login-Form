const success = document.querySelector('.success');
const error = document.querySelector('.error');
const submit = document.querySelector('.submit');

function login(e) {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
    checkForm(email, password);
}

function checkForm(userEmail, userPsw) {
    const user_email = 'minkhant1234@gmail.com';
    const user_psw = 'minkhantthu1234';
    if (userEmail && userPsw) {
        if (userEmail === user_email && userPsw === user_psw) {
            success.innerHTML = 'Login Successfully!!!';
            document.querySelector('.container').style.display = "none";
        } else if (userEmail === user_email && userPsw !== user_psw) {
            error.innerHTML = 'Wrong Password';
        } else if (userEmail !== user_email && userPsw === user_psw) {
            error.innerHTML = 'Wrong Email';
        }
    } else {
        error.innerHTML = 'Please Fill All Input Field';
    }
}