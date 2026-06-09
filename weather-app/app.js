
// We will expand app.js as we go through new lectures

// Lecture - 29

// console.log('Startting')

// setTimeout(() => { 
//     console.log('2 Second Timer')
// }, 2000)

// setTimeout(() => {
//     console.log('0 Second Timer')
// }, 0)
// console.log('Stopping')




// Goal (lecture - 38) :- Accept location via command line argument
//
// 1. Access the command line argument without yargs
// 2. Use the string value as the input for geocode
// 3. Only geocode if a location was provided
// 4. Test your wo2rk with couple of locations


// Lecture - 31
require('dotenv').config()

const request = require("request")
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

const address = process.argv[2]

if (!address) {
    console.log("Please provide an address!")
} else {
    geocode(address, (error, { latitude, longitude, location } = {}) => {

        if (error) {
            return console.log(error)
        }
    
        forecast(latitude, longitude, (error, forecastData) => {
    
            if (error) {
                return console.log(error)
            }
    
            console.log(location)
            console.log(forecastData)
    
        })
    
    })
}







// Goal (lecture - 40) :- Use both destructuring and property shorthand in weather app
//
// 1. Use destructuring in app.js, forecast.js, and geocode.js
// 2. Use property shorthand in forecast.js and geocode.js
// 3. Test your work!