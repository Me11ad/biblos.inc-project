const form = document.querySelector('#my-form');
let el1 = document.getElementById('reg-box');
let el2 = document.getElementById('reg-window');
let el3 = document.getElementById('reg-text');
let el4 = document.getElementById('button-box');

let localToken = localStorage.getItem('auth_token')
var tok = JSON.parse(localToken);
let count = tok
const list = document.querySelector('.check')

async function getResponce() {
   
    let numId = await fetch(`http://localhost:4000/CheckToken/${count}`, {
        method: 'GET',
    })
    const resId = await numId.json()
    console.log(resId.length)

 

    if (resId.length != 0) {

        window.location.replace("perprofile.html");
    }

}

getResponce()
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const email = formData.get('email')
    const login = formData.get('login')
    const password = formData.get('password')

    let checkAcc = true
    let responceEmailLogin = await fetch(`http://localhost:4000/check/email/login`, {
        method: 'GET',
    })
    const contentEmailLogin = await responceEmailLogin.json();

    const list = document.querySelector('.error-text')
    const list2 = document.querySelector('.check-box')

    contentEmailLogin.map(a => {
        if (a.email === email) {
            list.innerHTML = `
    <p class="error-txt">Почта занята</p>
    `
        } else if (a.login === login) {
            list.innerHTML = `
    <p class="error-txt">Логин занят</p>
    `
        } else if (email, login, password != 0) {
            checkAcc = false
        } else {
            list.innerHTML = `
        <p class="error-txt">Укажите все данные</p>
        `
        }


    })
    if (checkAcc == false) {
        fetch('http://localhost:4000/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, login, password }),
        });
        list2.innerHTML = `
<div class="reg-box2">
<div class="register-complt">
    <p class="reg-text">Письмо с подтверждением отправлено вам на почту</p>
    <a href="../mainpage.html">
    <button  class="reg-button" >Далее</button>
    </a>
</div>
</div>
`
        el1.remove()
        el2.remove()
        el3.remove()
        el3.remove()

    }
})






