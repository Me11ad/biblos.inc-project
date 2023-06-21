const form = document.querySelector('#my-form');


form.addEventListener('submit', async (event) => {
  event.preventDefault();

  try {
    // получаем данные из формы
    const formData = new FormData(form);
    const name = formData.get('nameQuiz');
    const questions = formData.get('questions');
    const answers1 = formData.get('answer1')
    const answers2 = formData.get('answer2')
    const answers3 = formData.get('answer3')
    const answers4 = formData.get('answer4')
    const is_correctCheck1 = formData.get('nasa-experience1')
    const is_correctCheck2 = formData.get('nasa-experience2')
    const is_correctCheck3 = formData.get('nasa-experience3')
    const is_correctCheck4 = formData.get('nasa-experience4')
    const specialization = formData.get('specialization')
   console.log(specialization)
    let is_corrects
    let is_correct


    const questionId = await fetch('http://localhost:4000/question/id', {
      method: 'GET',
    });
    const qestId = await questionId.json()
    let resultQuestionId = qestId.map(a => a.id)
    let questions_id = resultQuestionId[resultQuestionId.length - 1]
    let category_id = specialization


    new Promise(function (resolve, reject) {

      setTimeout(() => resolve(1), 2000); // (*)

    }).then(function (answer) {
      async function checkBox() {

        if (is_correctCheck1 == 1) {
          return is_corrects = 'true'
        } else {
          return is_corrects = 'false'
        }
      }
      checkBox()
      is_correct = is_corrects

      return answer = answers1

    }).then(function (answer) { // (**)
      fetch('http://localhost:4000/answer/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answer, questions_id, is_correct }),
      });
      async function checkBox() {

        if (is_correctCheck2 == 1) {
          return is_corrects = 'true'
        } else {
          return is_corrects = 'false'
        }
      }
      checkBox()
      is_correct = is_corrects
      return answer = answers2

    }).then(function (answer) { // (***)
      fetch('http://localhost:4000/answer/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answer, questions_id, is_correct }),
      });
      async function checkBox() {

        if (is_correctCheck3 == 1) {
          return is_corrects = 'true'
        } else {
          return is_corrects = 'false'
        }
      }
      checkBox()
      is_correct = is_corrects
      return answer = answers3

    }).then(function (answer) {
      fetch('http://localhost:4000/answer/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answer, questions_id, is_correct }),
      });
      async function checkBox() {

        if (is_correctCheck4 == 1) {
          return is_corrects = 'true'
        } else {
          return is_corrects = 'false'
        }
      }
      checkBox()
      is_correct = is_corrects
      return answer = answers4

    }).then(function (answer) {
      fetch('http://localhost:4000/answer/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answer, questions_id, is_correct }),
      });

      return alert(`Квиз добавлен`)
    })



    // отправляем POST запрос на backend
    

    const response = await fetch('http://localhost:4000/name/quiz/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });

    await fetch('http://localhost:4000/question/quiz/add/get', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questions, category_id }),
    });


    // обрабатываем ответ от backend
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
});

let localToken = localStorage.getItem('auth_token')
var tok = JSON.parse(localToken);
let count = tok


async function responceEdit() {
  let numId = await fetch(`http://localhost:4000/CheckToken/${count}`, {
      method: 'GET',
  })
  const resId = await numId.json()
  console.log(resId)
resId.map(async a => {
  let responce = await fetch(`http://localhost:4000/category/quiz/name/${a.id}`, {
      method: 'GET',
  })

  const content = await responce.json()
  console.log(content)
  const list = document.querySelector('.first-select-quiz')

  const quizName = content.map(a => {

      return `
          <option value="${a.id}" selected>
          ${a.name}
      </option>
      `
  })
 
  list.innerHTML = quizName
})
}

responceEdit()


