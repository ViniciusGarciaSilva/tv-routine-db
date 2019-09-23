"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const routineData = require('../data/routine.data');

exports.getAll = function (req, res, next) {
    var routines = routineData.readRoutines();
    res.status(200).send(routines);
};

exports.get = function (req, res, next) {
    const routine = routineData.readRoutine(req.params.date);
    res.status(200).send(routine);
}

exports.post = function (req, res, next) {
    routineData.createRoutine(req.body);
    res.status(201).send('Create routine: '+ req.body);
};

exports.put = function (req, res, next) {
    routineData.updateRoutine(req.body);
    res.status(201).send("Put routine: "+ req.body);
};

exports.delete = function (req, res, next) {
    routineData.deleteroutine(req.params.date);
    res.status(200).send("Delete routine: "+ req.params.date);
};
