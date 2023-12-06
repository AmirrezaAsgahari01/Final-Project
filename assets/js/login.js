const btn = document.getElementById('btn')
const usernameInput = document.getElementById('username')
const usernameErrorShower = document.getElementById('username-error')
const passwordInput=document.getElementById('password')
const passwordErrorShower=document.getElementById('password-error')

btn.addEventListener('click' , (e) => {
    e.preventDefault()

    if(usernameInput.value === ''){
        usernameErrorShower.innerText = 'Enter your username';
        usernameInput.classList.add('border-danger')
    } else{
        usernameErrorShower.innerText = ''
        usernameInput.classList.remove('border-danger')
        usernameInput.classList.add('border-success')

    }

    if(passwordInput.value === ''){
        passwordErrorShower.innerText = 'Enter your password'
        passwordInput.classList.add('border-danger')
    }else{
        passwordErrorShower.innerText = ''
        passwordInput.classList.remove('border-danger')
        passwordInput.classList.add('border-success')
    }
})