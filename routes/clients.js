
const express = require('express')
const router = express.Router()
const clientsControllers = require('../controllers/clients')

router.get('/list', clientsControllers.list)
router.get('/new', clientsControllers.create)

module.exports = router

//exemple=> clientsControllers.list is reference to only function
//exemple=> clientsControllers.list() is reference to only execution