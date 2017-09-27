/* globals expect: true, describe: true, it: true */

require('babel-register')()

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect

chai.use(dirtyChai)

global.expect = expect
