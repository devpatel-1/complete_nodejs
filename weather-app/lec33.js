require('dotenv').config()

const request = require("request")

const apiKey1 = process.env.MAPBOX_API_KEY

const geocodeURL = `https://api.mapbox.com/search/geocode/v6/forward?q=Los%20Angeles&access_token=${apiKey1}&limit=1`

request({ url: geocodeURL, json: true }, (error, response) => {

    if (error) {
        console.log("Unable to connect!")
    } else if (response.body.features.length === 0) {
        console.log("Unable to find location!")
    } else {

        const longitude = response.body.features[0].geometry.coordinates[0]
        const latitude = response.body.features[0].geometry.coordinates[1]

        console.log(latitude, longitude)
    }

})