"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var sqlite = require('sqlite-sync');
sqlite.connect('routine.db');

function createRoutine(routine) {
  console.log("Creating Routine: ", routine);
  sqlite.run(
    `INSERT INTO routines (date, channel) VALUES (
      '${routine.date}', 
      '${routine.channel}'
    )`
  );
}
exports.createRoutine = createRoutine;

function readRoutines() {
  console.log('Reading all Routines');
  var rows = sqlite.run("SELECT * FROM routines");
  console.log('rows:', rows);
  return (rows);
}
exports.readRoutines = readRoutines;

function readRoutine(date) {
  console.log('Reading Routine where date: ' + date);
  var rows = sqlite.run(`SELECT * FROM routines WHERE date = '${date}'`);
  console.log('rows:', rows);
  return (rows);
}
exports.readRoutine = readRoutine;

function updateRoutine(routine, date) {
  console.log(`Updating Routine where date: '${date}' with `, routine );
  sqlite.run(`UPDATE routines SET  
    date = '${routine.date}',
    channel = '${routine.channel}'
    WHERE date = '${date}'`);
}
exports.updateRoutine = updateRoutine;

function deleteRoutine(date) {
  console.log("Deleting Routine where date: " + date);
  sqlite.run(`DELETE FROM routines WHERE date = '${date}' `);
}
exports.deleteRoutine = deleteRoutine;