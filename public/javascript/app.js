

// fetch('http://localhost:3000/weather?address=Baltimore').then((res) => {
   
//     res.json().then((data) => {
//         if(data.error){
//             console.log('Error pass correct location')
//         } else {
//             console.log(data.location)
//             console.log(data.forecast)
//         }
//     })
// })

const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'From Javascript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = searchElement.value
    console.log(location)

    messageOne.textContent = 'Loading....' 
    messageTwo.textContent = '' 

    fetch('http://localhost:3000/weather?address='+ location).then((res) => {
   
    res.json().then((data) => {
        if(data.error){
            // console.log('Error pass correct location')
            messageOne.textContent = data.error
          
        } else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
            
        }
    })
})
})