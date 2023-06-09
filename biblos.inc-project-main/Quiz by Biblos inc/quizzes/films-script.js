// const quizData = [
//    {
//       qestion: "17-летняя аристократка влюбляется в доброго (но финансово неуверенного) художника на борту роскошного злополучного корабля.",
//       a: "Титаник",
//       b: "Ветер",
//       c: "Лодка",
//       d: 'Мятеж на "Баунти" ',
//       correct: "a",
//    },
//    {
//       qestion: "Простой человек с низким IQ ждет на автобусной остановке и делится жизненными историями с незнакомыми людьми.",
//       a: "Унесенные ветром",
//       b: "Полуночный ковбой",
//       c: "Список Шиндлера",
//       d: "Форрест Гамп",
//       correct: "d",
//    },
//    {
//       qestion: "Преступник восстает против злой медсестры в психиатрической больнице и объединяет напуганных пациаентов",
//       a: "Пять простых кусочков",
//       b: "Коридор шока",
//       c: "Пограничник",
//       d: "Пролетая над гнездом кукушки",
//       correct: "d",
//    },
//    {
//       qestion: "Во время Второй мировой войны бизнесмен помогает спасти многих евреев от Холокоста, нанимая их в качестве фабричных рабочих.",
//       a: "Cпасти рядового Райана",
//       b: "Пианист",
//       c: "Список Шиндлера",
//       d: "Падение",
//       correct: "с",
//    },
//    {
//       qestion: "Официантка влюбляется в бывшего заключенного, когда они бегут через всю страну, жестоко грабя банки вместе до самого конца.",
//       a: "Бульвар Сансет",
//       b: "Бонни и Клайд",
//       c: "Касабланка",
//       d: "Американец в Париже",
//       correct: "a",
//    },
//    {
//       qestion: "Молодая женщина, находящаяся в бегах за кражу денег у своего босса, встречает молодого человека, управляющего уединенным мотелем под железной опекой своей матери.",
//       a: "Психо",
//       b: "Мотель Бейтса",
//       c: "Головокружение",
//       d: "Сеть",
//       correct: "a",
//    },
//    {
//       qestion: "Торнадо в Канзасе подхватывает молодую женщину с ее собакой и переносит в волшебную страну.",
//       a: "Твистер",
//       b: "Навстречу буре",
//       c: "Волшебник страны Оз",
//       d: "Парк юрского периода",
//       correct: "c",
//    },
//    {
//       qestion: "Британский офицер объединяет и ведет арабские племена во время Первой мировой войны на борьбу с турками.",
//       a: "Лоуренс Аравийский",
//       b: "На Западном фронте без перемен",
//       c: "Прощай, оружие",
//       d: "Галлиполи",
//       correct: "a",
//    },
//    {
//       qestion: "Трудный ребенок находит в себе мужество помочь дружелюбному инопланетянину сбежать с Земли и вернуться на свою родную планету.",
//       a: "Исследователи",
//       b: "Огонь в небе",
//       c: "Мстители",
//       d: "Инопланетянин",
//       correct: "d",
//    },
//    {
//       qestion: "Во время предварительного просмотра в тематическом парке произошел серьезный сбой в подаче электроэнергии, и его экспонаты с динозаврами вышли из строя.",
//       a: "Западный мир",
//       b: "Парк юрского периода",
//       c: "Побег из завтрашнего дня",
//       d: "Спасти мистера Бэнкса",
//       correct: "b",
//    },
//    {
//       qestion: "Группа американских солдат отправляется в тыл врага, чтобы вернуть товарища американского солдата, чьи братья были убиты в бою.",
//       a: "Боевой конь",
//       b: "Падение черного ястреба",
//       c: "Спасти рядового Райана",
//       d: "Самый длинный день",
//       correct: "c",
//    },
//  ];

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