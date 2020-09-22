//Client-side JavaScript

console.log('Client side javascript file is loaded!')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then( (data) => {
//         console.log(data)
//     })
// })

const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const msgOne = document.querySelector('#msg-1')
const msgTwo = document.querySelector('#msg-2')

//msgOne.textContent = 'From JavaScript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const loc = searchElement.value
    console.log(loc)
    msgOne.textContent = 'Loading..'
    msgTwo.textContent = ''
    fetch('/weather?address=' + loc).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                //console.log(data.error)
                msgOne.textContent = data.error

            } else {
                // console.log('Forecast ' + data.forecast)
                // console.log('Location ' + data.location)
                msgOne.textContent = data.location
                msgTwo.textContent = data.forecast
            }
        })
    })
})