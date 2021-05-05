
const express = require('express')
const indexRouter = require('./routes/index')
const clientsRouter = require('./routes/clients')

const app = express()//Create a instance
const port = 3000

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