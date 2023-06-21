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

    let is_corrects
    let is_correct
    console.log(is_corrects)

    const questionId = await fetch('http://localhost:4000/question/id', {
      method: 'GET',
    });
    const qestId = await questionId.json()

    let resultQuestionId = qestId.map(a => a.id)
    let questionIds = resultQuestionId[resultQuestionId.length - 1]
    let questions_id = questionIds + 1
    

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
    const nameId = await fetch('http://localhost:4000/name/id', {
      method: 'GET',
    });
    const resId = await nameId.json()

    let resultNameId = resId.map(a => a.id)
    let categoryIdLast = resultNameId[resultNameId.length - 1]
    

    const response = await fetch('http://localhost:4000/name/quiz/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });

    await fetch('http://localhost:4000/question/quiz/add', {
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








