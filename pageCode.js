function createAccount(){
    const newUser = document.getElementById('newUser').value;
    const newPass = document.getElementById('newPass').value;
    const newPassConfirm = document.getElementById('newPassConfirm').value;
        if (newPass === newPassConfirm){
            console.log('same')
        }else{
            const passWarning = document.getElementById('passWarning');
            passWarning.classList.remove('form--hidden');
        }
};

document.getElementById('signUpButton').addEventListener('click', createAccount)

// getting our website and lisening to the event that is when it first loads and then connect function
document.addEventListener('DOMContentLoaded', () => {
    // variable of login  form
    const signIn = document.querySelector('#signIn');
    // variable of our sign up form
    const signUp = document.querySelector('#signUp');
    // if we click our sign up link connect function
    document.querySelector('#linkCreate').addEventListener('click', () => {
        // hide the login form by adding our class that gives a display of none
        signIn.classList.add('form--hidden');
        // remove class that gives a display of none from our sign up form
        signUp.classList.remove('form--hidden');
    });
    // vice versa ^^
    document.querySelector('#linkLogin').addEventListener('click', () => {
        signIn.classList.remove('form--hidden');
        signUp.classList.add('form--hidden');
    });
});
