"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var sqlite = require('sqlite-sync');
sqlite.connect('routine.db');

function createRoutine(routine) {
    console.log("CREATE ROUTINE: ", routine);
    sqlite.run(
      `INSERT INTO routines (date, channel) VALUES (
        '${routine.date}', 
        '${routine.channel}'
      )`
    );
}
exports.createRoutine = createRoutine;



function readRoutines() {
    console.log('Read Routines');
    var rows = sqlite.run("SELECT * FROM routines");
    console.log('rows:', rows);
    return (rows);
}
exports.readRoutines = readRoutines;

function readRoutine(date) {
  console.log('Read Routine. Date: ' + date);
  var rows = sqlite.run("SELECT * FROM routines WHERE date = " + date);
  console.log('rows:', rows);
  return (rows);
}
exports.readRoutine = readRoutine;

function updateRoutine(routine) {
    sqlite.run(`UPDATE routines SET 
      date = "${routine.date}",
      channel = "${routine.channel}"
      where date = ${routine.date}`);
    console.log("Update Routine date: " + routine.date);
}
exports.updateRoutine = updateRoutine;

function deleteRoutine(date) {
    console.log("Delete Routine date: " + date);
    sqlite.run("DELETE FROM routines WHERE date = " + date);
}
exports.deleteRoutine = deleteRoutine;

function deleteRoutine(date) {
  console.log("Delete Routine date: " + date);
  sqlite.run("DELETE FROM routine WHERE date = " + date);
}
exports.deleteRoutine = deleteRoutine;