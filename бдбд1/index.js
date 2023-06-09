const bodyParser = require('body-parser')
const express = require('express');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/quiz.db')
const db2 = new sqlite3.Database('./db/ans.db')
const db3 = new sqlite3.Database('./db/users1.db')
const cors = require('cors');



var app = express();
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(cors());
const jsonParser = express.json()

const port = 4000;

app.listen(`${port}`, () => {
  console.log("Server is listening on port" + `${port}`);
});


app.get('/question', (req, res) => {
  db.all(`SELECT * FROM question`, (err, rows) => {
    res.json(rows)
  })
})


app.get('/question/title', (req, res) => {
  db.all(`SELECT * FROM qtion_answer`, (err, rows) => {
    res.json(rows)
  })
})



app.get('/quiz/:id', (req, res) => {
  const quizId = req.params.id;

  db.all(`SELECT * FROM question WHERE category_id = ?`, quizId, (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.send(row);
  });
});

app.get('/quiz/answer/:id', (req, res) => {
  const quizId = req.params.id;

  db.all(`SELECT * FROM answer WHERE questions_id = ?`, quizId, (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.send(row);
  });
});


app.get('/quiz/:iуеd', (req, res) => {
  const { id } = req.params

  const request = `SELECT * FROM  answers WHERE ID=${id} `


  console.log(request)
  db.run(request, (result, err) => {
    if (err) {
      res.json(err)
    }
    res.json(result)
  })
})

app.post('/attributes', (req, res) => {
  const answer = req.body
  const request = `INSERT INTO ATTRIBUTES VALUES (
            null, 
            '${answer.name}',
            '${answer.email}')`




  console.log(request)
  db2.run(request, (err, result) => {
    if (err) {
      return res.json(err)
    }

    res.json({
      data
    })

  })
})

app.get('/question/title', (req, res) => {
  res.json(rows)
})


app.get('/quiz/category/:id', (req, res) => {
  const quizId = req.params.id;

  db.all(`SELECT * FROM subject WHERE id = ?`, quizId, (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.send(row);
  });
});


let bd = new sqlite3.Database('./db/users.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Подключено к основной базе данных.');
});

// анализатор запросов жсон
app.use(express.json());

// регистр
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body)
  const sql = `INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`;

  // запрос к бд по регу
  bd.run(sql, (err) => {
    if (err) {
      console.log(err.message);
      res.status(500).send('Почта или никнейм уже используются.');
    } else {
      res.send('Пользователь успешно зарегистрирован.');
    }
  });
});

// логин
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;

  // запрос к бд по логину
  bd.get(sql, (err, row) => {
    if (err) {
      console.log(err.message);
      res.status(500).send('Ошибка входа.');
    } else if (row === undefined) {
      res.status(401).send('Неверная почта или пароль.'); //
    } else {
      res.send(`Пользователь ${row.username} авторизован.`);
    }
  });
});

app.get('/list/questions', (req, res) => {
  db.all(`SELECT * FROM questions`, (err, rows) => {
    res.json(rows)

  })
})


app.post('/list/questions', (req, res) => {
  const questions = req.body
  const request = `INSERT INTO questions VALUES(
              null,
              '${questions.question}'
              )`
  console.log(request)

  db2.run(request, (err) => {
    if (err) {
      res.json(err)
    }
    res.json('добавлено')
  })
}),



  // запрос бд по категориям
  app.get('/questionid/1', (req, res) => {
    db.all(`SELECT category_id  , id FROM question WHERE category_id = 1`, (err, rows) => {
      res.json(rows)
    })
  })

app.get('/questionid/2', (req, res) => {
  db.all(`SELECT category_id  , id FROM question WHERE category_id = 2`, (err, rows) => {
    res.json(rows)
  })
})

app.get('/questionid/3', (req, res) => {
  db.all(`SELECT category_id  , id FROM question WHERE category_id = 3`, (err, rows) => {
    res.json(rows)
  })
})

app.get("/users", (req, res) => {
  db.all("SELECT * FROM users1", function (err, rows) {
    if (err) {
      res.status(400).send(err.message);
    } else {
      res.send(rows);
    }
  });
});

// POST запрос - добавление нового пользователя в базу данных
//Проверка используеться ли почта юзера
app.post("/users", async (req, res) => {
  db3.all("SELECT email FROM users ", (err, rows) => {

    let result = rows.map(a => a.email);

    console.log(result)


    const { name, email, message } = req.body;
    if (!name) {
      res.status(400).send("Name is required");
      return;
    }

    if (!email) {
      res.status(400).send("Age is required");
      return;
    }

    if (!message) {
      res.status(400).send("Age is required");
      return;
    }
    let mass = Array(email)

    for (let i = 0; i < result.length; i++) {
      if (mass.includes(result[i])) {
        res.status(400).send("Емайл уже используется");
        return;

      }
    }

    console.log(mass)




    db3.run("INSERT INTO users (name, email , message) VALUES (?, ? , ?)", [name, email, message], function (
      err
    ) {

      if (err) {
        res.status(400).send(err.message);
      } else {
        res.send(`User ${name} created successfully`);
      }

    });

  }); app.get('/checkAut', (req, res) => {
    db3.all("SELECT email FROM users ", (err, rows) => {
      let massiveAut = []
      massiveAut.push(rows)
      res.json(rows)
    })

  })
})


app.post("/answer/add", async (req, res) => {
  db.all("SELECT answer FROM answer ", (err, rows) => {

    console.log(rows)

    const { answer, questions_id , is_correct} = req.body;
    if (!answer) {
      res.status(400).send("Вы не ввели ответ");
      return;
    }

    db.run("INSERT INTO answer (answer , questions_id , is_correct) VALUES (?, ? , ?)", [answer, questions_id , is_correct], function (
      err
    ) {

      if (err) {
        res.status(400).send(err.message);
      } else {
        res.send(`Вопрос ${answer} успешно добавлен`);
      }

    });

  });
})


app.post("/name/quiz/add", async (req, res) => {
  db.all("SELECT name FROM subject", (err, rows) => {
    let resultNameQuiz = rows.map(a => a.name)
    console.log(resultNameQuiz)



    const { name } = req.body;
    if (!name) {
      res.status(400).send("Вы не ввели название квиза");
      return;
    }

    let checkmassQuizName = Array(name)


    for (let i = 0; i < resultNameQuiz.length; i++) {
      if (checkmassQuizName.includes(resultNameQuiz[i])) {
        res.status(400).send("Такое название квиза уже существует");
        return;

      }
    }



    db.run("INSERT INTO subject (name) VALUES (?)", [name], function (
      err
    ) {
      console.log(err)
      if (err) {
        res.status(400).send(err.message);
      } else {
        res.send(`Название ${name} успешно добавлено`);
      }

    });
  });
});


app.post("/question/quiz/add", async (req, res) => {
  db.all("SELECT questions FROM question", (error, row) => {
    let resultQuestionQuiz = row.map(a => a.questions)
    const { questions, category_id } = req.body;
    let checkQuestionQuiz = Array(questions)

    for (let i = 0; i < resultQuestionQuiz.length; i++) {
      if (checkQuestionQuiz.includes(resultQuestionQuiz[i])) {
        res.status(400).send("Такое название вопроса уже существует");
        return;

      }
    }

    db.run(`INSERT INTO question (questions , category_id) VALUES (? , ?)`, [questions, category_id], function (
      err
    ) {
      console.log(err)
      if (err) {
        res.status(400).send(err.message);
      } else {
        res.send(`Вопрос ${questions} успешно добавлен`);
      }

    });
  })
})

app.get('/name/id', (req, res) => {
  db.all(`SELECT id FROM subject `, (err, rows) => {
    res.json(rows)
  })
})
//Получение списка названием квизов
app.get('/name/id/quiz', (req, res) => {
  db.all(`SELECT id , name FROM subject `, (err, rows) => {
    res.json(rows)
  })
})

app.get('/question/id', (req, res) => {
  db.all(`SELECT id FROM question `, (err, rows) => {
    res.json(rows)
  })
})


