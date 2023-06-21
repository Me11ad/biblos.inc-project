let ansMass = 0
let category = 1
    
    
    

async function responce() {
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
}

responce()