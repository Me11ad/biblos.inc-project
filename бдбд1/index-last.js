const express = require('express')
const app = express()
const cors = require("cors")
const sqlite = require('sqlite3')
const md5 = require('md5')
var jwt = require('jsonwebtoken');

const secret = 'auth-test'

const db = new sqlite.Database('./db/blog')

app.use(express.static(__dirname));




const port = "3000"

const posts = require("./posts.json")
const jsonParser = express.json()

app.use(cors())

db.serialize(() => {

});

app.get("/", (req, res) => {
    console.log(md5('message'))
    res.send("This my API")
})

app.post("/auth/login", jsonParser, (req, res) => {
    // Login
    // 1) Достать из запроса данные о существующем юзере
    // 2) Проверить данные в бд, на что то они есть по логину (аутентифицировать юзера)
    // 3) Если юзер в бд сверить пароль из бд и из запроса
    // 4) Дать доступ

    const user = req.body // { password, login }

    const loginUser = (dbUser) => {
   
        if (dbUser.password === md5(user.password)) {
            const token =  jwt.sign({ id: dbUser.id }, secret, {
                expiresIn: 86400
            })

            return res.status(200).json({
                data: {
                    user: dbUser,
                    token
                }
            })
        }
        return res.status(403).json({
            error: "Неккоректный логин или пароль"
        })
    }

    db.get(`SELECT * FROM users WHERE login = "${user.login}"`, (err, data) => {
        if (err) {
            return res.status(500).json({
                error: "Ошибка"
            })
        }   

        if (data) {
            loginUser(data)
        }

        return res.status(409).json({
            error: "Пользователь не найден"
        })
    })

})

app.post("/auth/register", jsonParser, (req, res) => {
    // Reg
    // +1) Достать из запроса данные о новом юзере
    // +2) Проверить данные в бд, на что то их нет (аутентифицировать юзера)
    // +3) Если все юзера нету  в бд, тогда добавить в таблицу users нового юзера
    // +4) Отправить сообщение о том что все прошло успешно

    const user = req.body // { password, login }

    const createNewUser = () => {
        db.run(`INSERT INTO users (login, password) VALUES("${user.login}", "${md5(user.password)}")`)
        db.get(`SELECT * FROM users WHERE login = "${user.login}" `, (err, data) => {
            if (!err) {
                const token =  jwt.sign({ id: data.id }, secret, {
                    expiresIn: 86400
                })
                
                res.status(201).json({
                    data: {
                        user: data,
                        token
                    }
                })
            }
        })
    }

    db.get(`SELECT * FROM users WHERE login = "${user.login}" `, (err, data) => {
        if (err) {
            console.log('error: '. err)
        }   

        if (data) {
            return res.status(409).json({
                error: "Пользователь с таким логином уже существует"
            })
        }

        createNewUser()
    })
})


app.get("/api/posts", jsonParser, (req, res) => {
    res.json({
        code: 200,
        data: posts
    })
})

app.post("/api/posts", jsonParser, (req, res) => {
    console.log(req.body)
    res.json(req.body)
})

app.listen(port, () => {
    console.log("Server started on 3000 port")
})
