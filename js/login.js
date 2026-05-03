import { dataPengguna } from './data.js';

const formLogin = document.getElementById('loginForm');
const errorPopup = document.getElementById("errorModal")

if(formLogin) {
    formLogin.addEventListener('submit', (event) => {
        event.preventDefault()

        const emailInput = document.getElementById("email")
        const passwordInput = document.getElementById("password")

        const email = emailInput?.value.trim() || ''
        const password = passwordInput?.value.trim() || ''

        const matchedUser = dataPengguna.find(user => user.email === email && user.password === password)

        if(matchedUser) {
            window.location.href = 'dashboard.html'
        } else {
            if(errorPopup) {
                errorPopup.style.display = 'block'
            }
        }
    })
}

const onHidePopup = () => {
    errorPopup.style.display = 'none'
}

const closeErrorPopup = document.getElementById("closeErrorModal")

closeErrorPopup.addEventListener('click', event => {
    onHidePopup();
})