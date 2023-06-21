let localToken = localStorage.getItem('auth_token')
var tok = JSON.parse(localToken);
let count = tok
const list = document.querySelector('.check')

async function getResponce() {

    let numId = await fetch(`http://localhost:4000/CheckToken/${count}`, {
        method: 'GET',
    })
    const resId = await numId.json()
    console.log(resId)

   
    
   
    
            list.innerHTML = `
            <a href="./profile/profile.html">
            `
       
            list.innerHTML = `
            <a href="./profile/perprofile.html">
            `
           
        
   
}
getResponce()