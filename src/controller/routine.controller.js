"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const routineData = require('../data/routine.data');

exports.getAll = async function (req, res, next) {
    var routines = await routineData.readRoutines();
    res.status(200).send(routines);
};

exports.get = async function (req, res, next) {
    const routine = await routineData.readRoutine(req.params.date);
    res.status(200).send(routine);
}

exports.post = function (req, res, next) {
    const data = req.body.data
    console.log(data.length)
    for(let i=0; i<data.length; i++) {
        routineData.createRoutine(data[i]);
    }
    res.status(201).send('Routines created!');
};

exports.put = function (req, res, next) {
    routineData.updateRoutine(req.body, req.params.date);
    res.status(201).send('Routine updated!');
};

exports.delete = function (req, res, next) {
    routineData.deleteRoutine(req.params.date);
    res.status(200).send('Routine deleted!');
};

exports.clear = function (req, res, next) {
    routineData.clearRoutines();
    res.status(200).send('Routines cleared!');
};