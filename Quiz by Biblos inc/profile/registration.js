let mail = document.querySelector('#mail')
let login = document.querySelector('#login')
let password = document.querySelector('#password')
let submit = document.querySelector('#submit')

let reg_users = {} //объект пользователей

function user(mail, login, password) { //создать объекты пользователей
    this.mail = mail
    this.login = login
    this.password = password
}

function newId(reg_users) {
    return Object.keys(reg_users).length
}

submit.addEventListener('click', () => { //обработчик событий для кнопки
    const userMail = mail.value
    const userLogin = login.value
    const userPas = password.value

    const newUser = new user(userMail, userLogin, userPas) //объединение в объект

    const userId = 'user' + newId(reg_users)
    reg_users[userId] = newUser

    console.log(reg_users)

    alert(`Поздравляем! Вы успешно прошли регистрацию.`)
})