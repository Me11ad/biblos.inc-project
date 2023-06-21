

const form = document.querySelector('.my-form');
let localToken = localStorage.getItem('auth_token')
var tok = JSON.parse(localToken);
let count = tok
const list = document.querySelector('.nick')
console.log(count)


form.addEventListener('submit', async (event) => {
    
   localStorage.removeItem('auth_token')
  

})





async function getResponce() {

    let numId = await fetch(`http://localhost:4000/CheckToken/${count}`, {
        method: 'GET',
    })
    const resId = await numId.json()
    console.log(resId)
resId.map(async a =>{
    let responceEmailLogin = await fetch(`http://localhost:4000/CheckEmail/${a.id}`, {
        method: 'GET',
    })
    const contentEmailLogin = await responceEmailLogin.json();



    resId.map(async a => {
        let tokenInfo = await fetch(`http://localhost:4000/user/token/${a.id}`, {
            method: 'GET',
        })
        const restokeninf = await tokenInfo.json()
        restokeninf.map(async a => {
            list.innerHTML = `
        <h1>${a.login}</h1>
        `
        })
        console.log(restokeninf)
    })
})
}
getResponce()


