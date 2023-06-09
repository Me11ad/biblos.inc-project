// const quizData = [
//    {
//       qestion: "В какой игре при выборе максимального уровня сложности враги начинают разговаривать на корейском, чтобы главный игрок не мог расслышать их переговоры?",
//       a: "Crysis",
//       b: "Splinter Cell",
//       c: "Call of Duty",
//       d: 'Max Payne',
//       correct: "a",
//    },
//    {
//       qestion: "В 1994 году был исследован синдром, названный в честь видеоигры. Его эффект проявляется у некоторых людей, которые уделяют много времени и внимания однотипным действиям. Из-за этого образы, связанные с этими действиями, начинают возникать во сне человека и даже мерещиться наяву. Какая игра дала название такому синдрому?",
//       a: "Pac-Man",
//       b: "Tetris",
//       c: "Duck Hunt",
//       d: 'Super Mario',
//       correct: "b",
//    },
//    {
//       qestion: "Какая игра мирового уровня в самом начале называлась «Cave Game» («пещерная игра»)?",
//       a: "World of Warcraft",
//       b: "Rust",
//       c: "Diablo",
//       d: 'Minecraft',
//       correct: "d",
//    },
//    {
//       qestion: "Откуда пошла фраза о простреленном колене?",
//       a: "The Elder Scrolls V: Skyrim",
//       b: "Fable",
//       c: "Dark Souls",
//       d: 'The Elder Scrolls IV: Oblivion',
//       correct: "a",
//    },
//    {
//       qestion: "Из какой игры чит-код HESOYAM?",
//       a: "Fallout",
//       b: "Doom",
//       c: "Grand Theft Auto: San Andreas",
//       d: 'The Sims',
//       correct: "c",
//    },
//    {
//       qestion: "В одной из предложенных игр существует карточная мини-игра. Её суть: в процессе нескольких раундов сделать так, чтобы суммарная сила выложенных вами карт была больше, чем у противника. О какой игре идёт речь?",
//       a: "Ведьмак 3: Дикая Охота",
//       b: "The Elder Scrolls V: Skyrim",
//       c: "S.T.A.L.K.E.R.",
//       d: 'Hearthstone',
//       correct: "a",
//    },
//    {
//       qestion: "В одной из серий игр есть оружие, которое из-за цензуры пришлось переименовать в «Bio Force Gun». О какой серии идёт речь?",
//       a: "Dead Space",
//       b: "Mass Effect",
//       c: "Doom",
//       d: 'BioShock',
//       correct: "c",
//    },
//    {
//       qestion: "В какой из игр главный герой не произносит ни слова?",
//       a: "Prototype",
//       b: "Half-Life 2",
//       c: "Batman",
//       d: 'Tomb Raider: The Angel of Darkness',
//       correct: "b",
//    },
//    {
//       qestion: "Один парнишка 12 лет, гуляя со своей сестрой, наткнулся на разъяренного лося. Не растерявшись, мальчик отвлёк зверя на себя, а потом притворился мёртвым — он такой трюк в игре видел. На удивление, способ сработал и оба ребёнка не пострадали. Из какой игры он этому научился?",
//       a: "World of Warcraft",
//       b: "Rust",
//       c: "The Last of Us",
//       d: 'ARK: Survival Evolved',
//       correct: "a",
//    },
//    {
//       qestion: "Вспомним старину. Самой первой доступной компьютерной видеоигрой была…",
//       a: "Pac-Man",
//       b: "Space Invaders",
//       c: "Pong",
//       d: 'Spacewar',
//       correct: "d",
//    },
//    {
//       qestion: "«Ни слова по-русски» — известная фраза из игры…",
//       a: "Payday 2",
//       b: "Left 4 Dead",
//       c: "Call of Duty: Modern Warfare 2",
//       d: 'Hitman',
//       correct: "c",
//    },
// ];

// const quiz = document.getElementById('quiz')
// const answerElement = document.querySelectorAll('.answer')
// const qestion = document.getElementById('question')
// const answer_a = document.getElementById('answer_a')
// const answer_b = document.getElementById('answer_b')
// const answer_c = document.getElementById('answer_c')
// const answer_d = document.getElementById('answer_d')
// const sumbit = document.getElementById('sumbit')
// const timer = document.getElementById('timer')

// let currentQuiz = 0
// let score = 0

// const time = () => {
//    console.log('Nice to see you here')
//    let count = 31
//    countdown = setInterval(() => {
//       count--
//       timer.innerHTML = `${count}s`
//       if (count == 0) {
//          clearInterval(countdown)

//          displayNext()
//       }
//    }, 1000)
// }

// loadQuiz()

// function loadQuiz() {
//    time()
//    deselectAnswer()

//    const currentQuizData = quizData[currentQuiz]

//    qestion.innerText = currentQuizData.qestion;
//    answer_a.innerText = currentQuizData.a;
//    answer_b.innerText = currentQuizData.b;
//    answer_c.innerText = currentQuizData.c;
//    answer_d.innerText = currentQuizData.d;
// }

// function deselectAnswer() {
//    answerElement.forEach(answer => answer.checked = false)
// }

// function getSelect() {
//    let answers

//    answerElement.forEach(answer => {
//       if (answer.checked) {
//          answers = answer.id
//       }
//    })

//    return answers

// }

// sumbit.addEventListener('click', (displayNext = () => {
//    const answer = getSelect()


//    if (answer === quizData[currentQuiz].correct) {
//       score++
//    }

//    clearInterval(countdown)

//    currentQuiz++

//    if (currentQuiz < quizData.length) {
//       loadQuiz()
//    } else {
//       quiz.innerHTML =
//          `
//          <div class="finalscore-pos">
//             <h2 class="finalscore">Поздравляем! Твой результат: ${score} из ${quizData.length}!</h2>
//          </div>
//          <div class="wasting-space"></div>
//          <div class="reload-block">
//             <button class="reload" onclick="location.reload()">Начать заново</button>
//          </div>
//          `
//       document.getElementById("sumbit").style.visibility = "hidden"
//       document.getElementById("timer").style.visibility = "hidden"
//    }
// })
// )
// "use strict";