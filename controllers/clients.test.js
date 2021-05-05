
const clientsController = require('./clients')
const expect = require('chai').expect
const sinon = require('sinon')//to use falses methods

describe('clients controller', () => {
    it('creates one clients', () => {
        let res = {
            send: function(){}
        }
        let mock = sinon.mock(res)
        mock.expects('send').once().withArgs('Page clients news!! !')
        clientsController.create({}, res)
    })
    it('returns all clients', () => {
        let res = {
            send: function(){}
        }
        let mock = sinon.mock(res)
        mock.expects('send').once().withArgs('FullStack Master!! !')
        clientsController.list({}, res)
    })
})
//I stop video in 06:15 minutes