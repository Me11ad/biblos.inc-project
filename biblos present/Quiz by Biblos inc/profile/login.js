
const form = document.querySelector('#my-form-login');
let el1 = document.getElementById('reg-box');
let el2 = document.getElementById('reg-window');
let el3 = document.getElementById('reg-text');
let el4 = document.getElementById('button-box');
let localToken = localStorage.getItem('auth_token')
var tok = JSON.parse(localToken);
let count = tok
const list = document.querySelector('.nick')
console.log(count)

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const email = formData.get('email')
    const password = formData.get('password')

    const list = document.querySelector('.error-text')
    const list2 = document.querySelector('.check-box')
    

    let responceEmailLogin = await fetch(`http://localhost:4000/check/email/login`, {
        method: 'GET',
    })
    const contentEmailLogin = await responceEmailLogin.json();
   console.log(contentEmailLogin)
    let massId = []

     contentEmailLogin.map(async a => {
        massId.push(a.id)
        
    let responceActive = await fetch(`http://localhost:4000/CheckVerify/${massId[massId.length - 1]}`, {
        method: 'GET',
    })
    let contentA = []
     contentA = await responceActive.json();
     console.log(contentA)
    
   contentA.map(a =>{
    console.log(a.active)
   
     
   
    
        if(a.active === null || a.active === 0){
            list2.innerHTML = `
            <div class="reg-box2">
            <div class="register-complt">
                <p class="reg-text">Потвердите адрес электронной почты</p>
                <a href="../mainpage.html">
                <button  class="reg-button" >Далее</button>
                </a>
            </div>
            </div>
            `
        }
    })
    console.log(a.password)
        if (a.email === email && password.length != 0) {
            
            fetch('http://localhost:4000/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
           
           
            localStorage.setItem("auth_token", `"${a.token}"`)
            console.log(localStorage.getItem('auth_token'))
            
            

            list2.innerHTML = `
<div class="reg-box2">
<div class="register-complt">
    <p class="reg-text">Вы успешно авторизовались</p>
    <a href="./perprofile.html">
    <button  class="reg-button" >Далее</button>
    </a>
</div>
</div>
`

            el1.remove()
            el2.remove()
            el3.remove()
            el3.remove()
        } else {
            list.innerHTML = `
        <p class="error-txt">Неверная почта или пароль</p>
        `
        }
    
})

})


