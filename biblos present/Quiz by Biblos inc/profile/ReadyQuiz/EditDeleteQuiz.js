const form = document.querySelector('#my-form');


form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const specialization = formData.get('specialization')
    const deleteQuiz = formData.get('deleteQuiz')
    console.log(specialization)
    




    let category = specialization;
    let ansMass = 0

    
    
    


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


    for (i = 0; i < allAns; i++) {
        ansIdMassive.push(res[i]['id'])
    }
    console.log(`Итог ${ansIdMassive}`)

    




    let responce = await fetch(`http://localhost:4000/quiz/answer/${ansIdMassive[ansMass]}`, {
        method: 'GET',
    })
    const content = await responce.json()

    console.log(content)


    
    
    


    let responceAnswer = await fetch(`http://localhost:4000/quiz/${category}`, {
        method: 'GET',
    })
    const contentAnswer = await responceAnswer.json();
   console.log(contentAnswer)
    

    const quizName = contentAnswer.map(a => {
        return `
        <li class="answers">
        <input name="answers" type="radio id="${a.id}" class="answer">
        <label for="${a.id}" id="answer_d">${a.questions}
        <input type="checkbox" id="${a.id}" name="${a.id}" value="1"></label>
    </li>
    `

    
    }).join(' ')
let id_question = []
    contentAnswer.map(a => {
        const checkans = formData.get(`${a.id}`)
        if (checkans == 1) {
            id_question.push(a.id)
          } 
        console.log(`ЭТООООО ${id_question}`)
        
    })

    for(let i = 0 ; i < id_question.length ; i++){
   await fetch(`http://localhost:4000/delete/question/${id_question[i]}`, {
            method: 'DELETE'
          });
          await fetch(`http://localhost:4000/delete/answer/${id_question[i]}`, {
            method: 'DELETE'
          });   
        }
   

    
    const list2 = document.querySelector('.first-block-answers')
    list2.innerHTML = quizName


 


    if(deleteQuiz == 1){
        for(let i = 0 ; i < ansIdMassive.length ; i++){
            await fetch(`http://localhost:4000/delete/question/${ansIdMassive[i]}`, {
                     method: 'DELETE'
                   });
                   await fetch(`http://localhost:4000/delete/answer/${ansIdMassive[i]}`, {
                     method: 'DELETE'
                   });   
                 }
                 await fetch(`http://localhost:4000/delete/quiz/${category}`, {
                    method: 'DELETE'
                  });   
                
            
    }

})
            



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




