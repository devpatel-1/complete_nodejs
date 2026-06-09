require('dotenv').config()
const apiKey = process.env.WEATHERSTACK_API_KEY

const http = require('http')
const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${latitude},${longitude}&units=f`

const request = http.request(url, () => {
    
    let data = ''
    
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()