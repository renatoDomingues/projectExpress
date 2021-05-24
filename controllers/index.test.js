
const indexController = require('./index')
const expect = require('chai').expect
const sinon = require('sinon')

describe('index controller', () => {
    it('home', () => {
        let res = {
            //send: function(){}
            render: function(){}
        }
        let data = {
            time: 10,
            list: ['Renato', 'Domingues', 'Test'],
            animals: [
                {name: 'Luck'},
                {name: 'Youri'},
                {name: 'Laura'}
            ]
        }
        let mock = sinon.mock(res)
        //mock.expects('send').once().withArgs('FullStack Master!! !!')
        mock.expects('render').once().withArgs('home', data)
        indexController.home({}, res)
    })

    it('handles without num1 and num2', () => {
        let res = {
            //send: function(){}
            render: function(){}
        }
        let mock = sinon.mock(res)
        //mock.expects('send').once().withArgs('Calculator!! !!')
        mock.expects('render').once().withArgs('erro')
        indexController.calculator({ query: {} }, res)
    })

    it('handles without num1', () => {
        let res = {
            //send: function(){}
            render: function(){}
        }
        let req = {
            query:{
                num2: '10'
            }
        }
        let mock = sinon.mock(res)
        //mock.expects('send').once().withArgs('Calculator!! !!')
        mock.expects('render').once().withArgs('erro')
        indexController.calculator(req, res)
    })

    it('handles without num2', () => {
        let res = {
            //send: function(){}
            render: function(){}
        }
        let req = {
            query:{
                num1: '10'
            }
        }
        let mock = sinon.mock(res)
        mock.expects('render').once().withArgs('erro')
        indexController.calculator(req, res)
    })

    it('calculator', () => {
        let res = {
            //send: function(){}
            render: function(){}
        }
        let req = {
            query:{
                num1: '10',
                num2: '20'
            }
        }
        let mock = sinon.mock(res)
        //mock.expects('send').once().withArgs('the sum is: 30')
        mock.expects('render').once().withArgs('calc', { sum: 30 })
        //indexController.calculator({ query: {} }, res)
        indexController.calculator(req, res)
    })
})