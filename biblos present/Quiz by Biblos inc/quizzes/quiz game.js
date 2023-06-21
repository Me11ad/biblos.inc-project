let category = 2;
let questiomMass = 0
let ansMass = 0
let quizId = 1
const sumbit = document.getElementById('sumbit')
const timer = document.getElementById('timer')
const quiz = document.getElementById('quiz')
let score = 0





async function getResponce() {

    let numId = await fetch(`http://localhost:4000/questionid/${category}`, {
        method: 'GET',
    })
    const resId = await numId.json()

   

    let allAns = resId.length

    let ansId = await fetch(`http://localhost:4000/questionid/${category}`, {
        method: 'GET',
    })
    const res = await ansId.json()

     let ansIdMassive = []

    for(i = 0 ; i < allAns; i++){
       ansIdMassive.push(res[i]['id'])
    }
    console.log(`Итог ${ansIdMassive}`)
    
    
    
    
    let responce = await fetch(`http://localhost:4000/quiz/answer/${ansIdMassive[ansMass]}`, {
        method: 'GET',
    })
    const content = await responce.json()
    let key;
    console.log(ansIdMassive[ansMass])

    const list = document.querySelector('.first-block-answers')
    const quizName = content.map(a => {
        return `
        <li class="answers">
        <input name="answers" type="radio" id="${a.id}" class="answer" onclick="setCurrAnswer(${a.is_correct})"
        >
        <label for="${a.id}" id="answer_d">${a.answer}</label>
    </li>
    `
    }).join(' ')
    console.log(`${quizName}`)

    list.innerHTML = quizName
  if(content.length == 0){
    quiz.innerHTML =
    `
<div class="finalscore-pos">
<h2 class="finalscore">Ошибка! Квиз недоделан:(</h2>
</div>
<div class="wasting-space"></div>
<div class="reload-block">
<button class="reload" onclick="location.reload()">Начать заново</button>
</div>
`
document.getElementById("sumbit").style.visibility = "hidden"
document.getElementById("timer").style.visibility = "hidden"
  }

}
getResponce();




async function getResponceAns() {
    let responceAnswer = await fetch(`http://localhost:4000/quiz/${category}`, {
        method: 'GET',
    })
    const contentAnswer = await responceAnswer.json();
    console.log(contentAnswer)
    const listAns = document.querySelector('.question-box')
    let key
    for (key in contentAnswer)
        listAns.innerHTML = `
<h2 class="qst" id="question"> ${contentAnswer[questiomMass].questions} </h2>
`
}




getResponceAns()

async function nextQuestions() {
    
    let responce = await fetch(`http://localhost:4000/questionid/${category}`, {
        method: 'GET',
    })
    const content = await responce.json()

    console.log(content.length)

    let allAns = content.length

    sumbit.addEventListener('click', function () {
        
        if (quizId < allAns) {
            quizId++
            questiomMass++
            ansMass++
        } else {
            quiz.innerHTML =
                `
            <div class="finalscore-pos">
            <h2 class="finalscore">Поздравляем! Твой результат: ${score} из ${allAns}!</h2>
            </div>
            <div class="wasting-space"></div>
            <div class="reload-block">
            <button class="reload" onclick="location.reload()">Начать заново</button>
            </div>
            `
            document.getElementById("sumbit").style.visibility = "hidden"
            document.getElementById("timer").style.visibility = "hidden"
        }


        setCurrAnswer()
        return getResponce(), getResponceAns()

    })
    getTimer()

}

async function getTimer() {
    let count = 100

    countdown = setInterval(() => {
        count--

        timer.innerHTML = `${count}s`
        if (count == 0) {
            quizId++

            nextQuestions()
            clearInterval(countdown)
            return nextQuestions(), getResponce(), getResponceAns()
        }
    }, 1000)
}

getTimer()

const setCurrAnswer = (isTrue) => {
    if (isTrue) {
        score++
        console.log("Правильно")
    } else {
        console.log("Нет")
    }
}


nextQuestions()



