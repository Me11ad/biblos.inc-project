

async function responceEdit() {
    let responce = await fetch(`http://localhost:4000/category/quiz/name/id`, {
        method: 'GET',
    })
    const content = await responce.json()
    let quizMassId = content.map(a => a.id)
    let quizMassName = content.map(a => a.name)
    const list = document.querySelector('.first-select-quiz')
    console.log(quizMassId)
    console.log(quizMassName)
    console.log(content)
      
        const quizName = content.map(a => {
            return `
            <option value="${a.id}" selected>
            ${a.name}
        </option>
        `
        })
        console.log(`${quizName}`)
    
    list.innerHTML = quizName
    
}
responceEdit()