
const express = require('express')
const router = express.Router()
const indexControllers = require('../controllers/index')

router.get('/', indexControllers.home)
router.get('/pageOne', indexControllers.pageOne)
router.get('/calc', indexControllers.calculator)
router.get('/pair/:num', indexControllers.pair)

module.exports = router