const quizData = [
 {
    qestion:'Какой объем памяти имела автоматическая цифровая вычислительная машина М-1?',
    a:'1000000 слов',
    b:'1024 слова',
    c:'256 слов',
    d:'1000 слов',
    correct:'256 слов',
 },
 {
    qestion:'Какого числа отмечается День программиста (256 день в году) в високосный год?',
    a:'12 сентября',
    b:'13 сентября',
    c:'4 декабря',
    d:'1 сентября',
    correct:'12 сентября',
 },
 {
    qestion:'Мотылек замкнул крылышками контакты. Какое жаргонное слово в программировании появилось по этому случаю?',
    a:'error',
    b:'bug',
    c:'breakdown',
    d:'mistake',
    correct:'bug',
 },
 {
    qestion:'Какому устройству дал имя винтовочный патрон американского происхождения?',
    a:'ROM',
    b:'CPUпет пве',
    c:'RAM',
    d:'HDD',
    correct:'HDD',
 },
 {
    qestion:'Создание какого языка программирования пока не отмечено премией Тьюринга?',
    a:'Алгол',
    b:'Фортран',
    c:'Модула',
    d:'Си',
    correct:'Си',
 },
 {
    qestion:'Как называют шуточный секрет, заложенный создателями в ПО?',
    a:'оладушка',
    b:'колядка',
    c:'пасхалка',
    d:'сырок',
    correct:'пасхалка',
 },
 {
    qestion:'Идеи двоичного кодирования были заложены',
    a:'Джоном фон Нейманом',
    b:'Готфрид Вильгельм Лейбницом',
    c:'Адой Лавлейс',
    d:'Чарльзом Беббиджем',
    correct:'Готфрид Вильгельм Лейбницом',
 },
 {
    qestion:'Какова была тактовая частота у первой модели персонального компьютера фирмы IBM?',
    a:'4,77 ГГц',
    b:'8 МГц',
    c:'4,77 МГц',
    d:'8800 Гц',
    correct:'4,77 МГц',
 },
 {
    qestion:'Первая ЭВМ в СССР называлась:',
    a:'Стрела',
    b:'МЭСМ',
    c:'IBM PC',
    d:'БЭСМ',
    correct:'МЭСМ',
 },
 {
    qestion:'Первым изобретателем перфокарт был:',
    a:'Д. Неппер',
    b:'В. Шиккард',
    c:'Ж. Жаккард',
    d:'Б. Паскаль',
    correct:'Ж. Жаккард',
 },
 {
    qestion:'В каком году появился язык программирования Java?',
    a:'1992',
    b:'1994',
    c:'1995',
    d:'1997',
    correct:'1995',
 },
];

const quiz = document.getElementById('quiz')
const answer = document.querySelectorAll('.answer')
const qestion = document.getElementById('question')
const answer_a = document.getElementById('answer_a')
const answer_b = document.getElementById('answer_b')
const answer_c = document.getElementById('answer_c')
const answer_d = document.getElementById('answer_d')
const sumbit = document.getElementById('sumbit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
   selectAnswer()
   
   const currentQuizData = quizData[currentQuiz]

   qestion.innerText = currentQuizData.qestion
   answer_a.innerText = currentQuizData.a
   answer_b.innerText = currentQuizData.b
   answer_c.innerText = currentQuizData.c
   answer_d.innerText = currentQuizData.d
}

function selectAnswer(){
   answer.forEach(answer => answer.cheked = false)
}

function getSelect(){
   let answers

   answer.forEach(answer =>{
      if(answer.cheked){
         answers = answer.id
      }
   })

   return answers

}


sumbit.addEventListener('click',() =>{
   const answer = getSelect()

   if (answer === quizData[currentQuiz].correct){
      score += 25
    }
   
   currentQuiz++

   if(currentQuiz < quizData.length){
      loadQuiz()
   } else{
      quiz.innerHTML =
      `
      <h2>Ты набрал ${score} очков</h2>
      <button onclick="location.reload()">Reload</button>
      `
   }
})




