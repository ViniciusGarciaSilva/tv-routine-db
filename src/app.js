'use strict'
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { 'default': mod }
}
Object.defineProperty(exports, '__esModule', { value: true })

var express = __importDefault(require('express'))
var bodyParser = __importDefault(require('body-parser'))

var app = express.default()
app.use(bodyParser.default.text())
app.use(bodyParser.default.urlencoded({ limit: '50mb', extended: true }))
app.use(bodyParser.default.json({limit: '50mb'}))
app.use('/', require('./routes/index.route'))
app.use('/routine', require('./routes/routine.route'))

module.exports = app
