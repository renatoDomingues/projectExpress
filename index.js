
const express = require('express')
const indexRouter = require('./routes/index')
const clientsRouter = require('./routes/clients')
const path = require('path')

const app = express()//Create a instance
const port = 3000

//work with EJS and PATH =>
//console.log(path.join(__dirname, 'views'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

/*
app.use((req, res, next) => {
    console.log('Passed through here!')
    next()//Have this
    //res.send('Call nothing more')
})//middle: interceps everyone
*/

app.use('/', indexRouter)
app.use('/clients', clientsRouter)

app.listen(port, () => 
    console.log('Listening on port:' +port))