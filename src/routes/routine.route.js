'use strict'
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { 'default': mod }
}

Object.defineProperty(exports, '__esModule', { value: true })
var express1 = __importDefault(require('express'))
var router = express1.default.Router()
var routineController = require('../controller/routine.controller')
router.get('/', routineController.getAll);
router.get('/:date', routineController.get);
router.post('/', routineController.post);
router.put('/:date', routineController.put);
router.delete('/:date', routineController.delete);
router.post('/clear', routineController.clear)
module.exports = router
