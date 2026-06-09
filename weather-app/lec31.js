require('dotenv').config()

const request = require("request")

const apiKey = process.env.WEATHERSTACK_API_KEY

const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=37.8267,-122.4233`

request({ url: url, json: true }, (error, response) => {

    console.log(response.body.current)

})

// Dont run this becuase 100 requests per month



// Lectre - 33 :- Geocoding
// Flow :- Address -> Latitude and Longitude -> Weather