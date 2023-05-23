const quizData = [
   {
      qestion: "Какой объем памяти имела автоматическая цифровая вычислительная машина М-1?",
      a: "1000000 слов",
      b: "1024 слова",
      c: "256 слов",
      d: "1000 слов",
      correct: "c",
   },
   {
      qestion: "Какого числа отмечается День программиста (256 день в году) в високосный год?",
      a: "12 сентября",
      b: "13 сентября",
      c: "4 декабря",
      d: "1 сентября",
      correct: "a",
   },
   {
      qestion: "Мотылек замкнул крылышками контакты. Какое жаргонное слово в программировании появилось по этому случаю?",
      a: "error",
      b: "bug",
      c: "breakdown",
      d: "mistake",
      correct: "b",
   },
   {
      qestion: 'Какому устройству дал имя винтовочный патрон американского происхождения?',
      a: 'ROM',
      b: 'CPU',
      c: 'RAM',
      d: 'HDD',
      correct: 'd',
   },
   {
      qestion: 'Создание какого языка программирования пока не отмечено премией Тьюринга?',
      a: 'Алгол',
      b: 'Фортран',
      c: 'Модула',
      d: 'Си',
      correct: 'd',
   },
   {
      qestion: 'Как называют шуточный секрет, заложенный создателями в ПО?',
      a: 'оладушка',
      b: 'колядка',
      c: 'пасхалка',
      d: 'сырок',
      correct: 'c',
   },
   {
      qestion: 'Идеи двоичного кодирования были заложены',
      a: 'Джоном фон Нейманом',
      b: 'Готфрид Вильгельм Лейбницом',
      c: 'Адой Лавлейс',
      d: 'Чарльзом Беббиджем',
      correct: 'b',
   },
   {
      qestion: 'Какова была тактовая частота у первой модели персонального компьютера фирмы IBM?',
      a: '4,77 ГГц',
      b: '8 МГц',
      c: '4,77 МГц',
      d: '8800 Гц',
      correct: 'c',
   },
   {
      qestion: 'Первая ЭВМ в СССР называлась:',
      a: 'Стрела',
      b: 'МЭСМ',
      c: 'IBM PC',
      d: 'БЭСМ',
      correct: 'b',
   },
   {
      qestion: "Первым изобретателем перфокарт был:",
      a: "Д. Неппер",
      b: "В. Шиккард",
      c: "Ж. Жаккард",
      d: "Б. Паскаль",
      correct: "c",
   },
   {
      qestion: "В каком году появился язык программирования Java?",
      a: "1992",
      b: "1994",
      c: "1995",
      d: "1997",
      correct: "c",
   },
];

const quiz = document.getElementById('quiz')
const answerElement = document.querySelectorAll('.answer')
const qestion = document.getElementById('question')
const answer_a = document.getElementById('answer_a')
const answer_b = document.getElementById('answer_b')
const answer_c = document.getElementById('answer_c')
const answer_d = document.getElementById('answer_d')
const sumbit = document.getElementById('sumbit')
const timer = document.getElementById('timer')

let currentQuiz = 0
let score = 0

const time = () => {
   console.log('Nice to see you here')
   let count = 16
   countdown = setInterval(() => {
      count--
      timer.innerHTML = `${count}s`
      if (count == 0) {
         clearInterval(countdown)

         displayNext()
      }
   }, 1000)
}

loadQuiz()

function loadQuiz() {
   time()
   deselectAnswer()

   const currentQuizData = quizData[currentQuiz]

   qestion.innerText = currentQuizData.qestion;
   answer_a.innerText = currentQuizData.a;
   answer_b.innerText = currentQuizData.b;
   answer_c.innerText = currentQuizData.c;
   answer_d.innerText = currentQuizData.d;
}

function deselectAnswer() {
   answerElement.forEach(answer => answer.checked = false)
}

function getSelect() {
   let answers

   answerElement.forEach(answer => {
      if (answer.checked) {
         answers = answer.id
      }
   })

   return answers

}

sumbit.addEventListener('click', (displayNext = () => {
   const answer = getSelect()


   if (answer === quizData[currentQuiz].correct) {
      score++
   }

   clearInterval(countdown)

   currentQuiz++

   if (currentQuiz < quizData.length) {
      loadQuiz()
   } else {
      quiz.innerHTML =
         `
         <div class="finalscore-pos">
            <h2 class="finalscore">Поздравляем! Твой результат: ${score} из ${quizData.length}!</h2>
         </div>
         <div class="wasting-space"></div>
         <div class="reload-block">
            <button class="reload" onclick="location.reload()">Начать заново</button>
         </div>
         `
      document.getElementById("sumbit").style.visibility = "hidden"
      document.getElementById("timer").style.visibility = "hidden"
   }
})
)
"use strict";