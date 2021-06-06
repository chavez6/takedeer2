// confirm password warning message
function createAccount(){
    const newUser = document.getElementById('newUser').value;
    const newPass = document.getElementById('newPass').value;
    const newPassConfirm = document.getElementById('newPassConfirm').value;
        if (newPass === newPassConfirm){
            console.log('same')
            const passWarning = document.getElementById('passWarning');
            if (passWarning.classList.contains('form--hidden') == false){
                passWarning.classList.add('form--hidden')
            };
                
        }else{
            const passWarning = document.getElementById('passWarning');
            passWarning.classList.remove('form--hidden');
        }
};

document.getElementById('signUpButton').addEventListener('click', createAccount)

// event function swaps sign in to sign up
document.addEventListener('DOMContentLoaded', () => {
    const signIn = document.querySelector('#signIn');
    const signUp = document.querySelector('#signUp');
    const signInText = document.querySelector('#signInText');
    const signUpText = document.querySelector('#signUpText');
    document.querySelector('#linkCreate').addEventListener('click', () => {
        signIn.classList.add('form--hidden');
        signInText.classList.add('form--hidden');
        signUp.classList.remove('form--hidden');
        signUpText.classList.remove('form--hidden');
    });
    
    // vice versa^^
    document.querySelector('#linkLogin').addEventListener('click', () => {
        signIn.classList.remove('form--hidden');
        signInText.classList.remove('form--hidden');
        const passWarning = document.getElementById('passWarning');
        if (passWarning.classList.contains('form--hidden') == false){
            passWarning.classList.add('form--hidden')
        };
        signUp.classList.add('form--hidden');
        signUpText.classList.add('form--hidden');
    });
});
