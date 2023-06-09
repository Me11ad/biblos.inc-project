const bodyParser = require('body-parser')
const express = require('express');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/test2.db')
const cors = require('cors');



var app = express();
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(cors());

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

    db.all(`SELECT * FROM question WHERE id = ?`, quizId, (err, row) => {
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


app.get('/quiz/:id', (req, res) => {
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




