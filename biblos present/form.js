
const form = document.querySelector('#mars-once')

form.addEventListener('submit', async (event) => {
    event.preventDefault()

    let data
    const elementsArray = Array.from(form.elements)

    elementsArray
        .filter(element => !!element.name)
        .forEach(element => {
            const { name, type } = element
            const value = type === 'checkbox' ? element.checked : element.value
            console.log({ name, value })
        })
        
    await fetch('http://localhost:4000/register', {
        method: "POST",
        body: data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
})