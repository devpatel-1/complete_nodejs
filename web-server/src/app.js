require('dotenv').config()
const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const { title } = require('process');

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebar engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Dev Patel'
    })
})  

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me', 
        name: "Dev Patel"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: "This is some helpful text",
        title: 'Help',
        name: 'Dev Patel'
    })
})

// Goal (lecture - 45) : Create two more HTML files
//
// 1. Create a html page for about with "About" title
// 2. Create a html page for help with "Help" title
// 3. Remove the old route handlers for both 
// 4. Visit both in the browser and test your work



app.get('', (req, res) => {
    res.send('<h1> Weather </h1>')
})



// Goal (lecture - 43) = Setup two new routes
//
// 1. Setup and about route and render a page title
// 2. Setup a weather route and render a page title
// 3. Test your work by visiting both in the browser    



app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error: error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error: error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})


// Goal (lecture - 54) :- Wire up /weather
//
// 1. Require geocode/forecast into app.js
// 2. Use the address to geocode
// 3. Use the coordinates to get the forecast  
// 4. Send back the real forecast and location



// Goal (lecture - 54) : Update weather endpoint to accept address
//
// 1. No address? send back an error message
// 2. Address? Send back the static JSON
//    -- Add address property onto JSON which returns the provided address
// 3. Test /weather and /weather?address=philadelphia



app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Dev Patel',
        errorMessage: 'Help article not found.'
    })    
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Dev Patel',
        errorMessage: 'Page not found.'
    })
})






app.listen(3000, () => {
    console.log('Server is up on port 3000.')   
})




// Goal (lecture - 44) : Update routes
//
// 1. Setup about route to render a title with HTML
// 2. Setup a weather route to send back JSON
//    -- Object with forecast and location string
// 3. Test your work by visiting both in the browser