"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const { Client } = require('pg');

const getClient = () => {
  return new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
}


const responseHandler = client => (error, res) => {
  if (error)
    throw error;
  client.end()
};

async function createRoutine(routine) {
  const client = getClient();
  await client.connect();
  console.log("Creating Routine: ", routine);
  client.query(
    `INSERT INTO routines (date, channel) VALUES (
      $1,
      $2
    )`,
    [routine.date, routine.channel],
    responseHandler(client)
  );
}
exports.createRoutine = createRoutine;

async function readRoutines() {
  const client = getClient();
  await client.connect();
  console.log('Reading all Routines');
  const res = await client.query("SELECT * FROM routines");
  console.log('rows:', res.rows);
  client.end();
  return (res.rows);
}
exports.readRoutines = readRoutines;

async function readRoutine(date) {
  const client = getClient();
  await client.connect();
  console.log('Reading Routine where date: ' + date);
  const res = await client.query(`SELECT * FROM routines WHERE date = '${date}'`);
  console.log('rows:', res.rows);
  return (res.rows);
}
exports.readRoutine = readRoutine;

async function updateRoutine(routine, date) {
  const client = getClient();
  await client.connect();
  console.log(`Updating Routine where date: '${date}' with `, routine);
  client.query(`UPDATE routines SET
    date = '${routine.date}',
    channel = '${routine.channel}'
    WHERE date = '${date}'`,
    responseHandler(client)
  );
}
exports.updateRoutine = updateRoutine;

async function deleteRoutine(date) {
  const client = getClient();
  await client.connect();
  console.log("Deleting Routine where date: " + date);
  client.query(`DELETE FROM routines WHERE date = '${date}'`,
    responseHandler(client));
}
exports.deleteRoutine = deleteRoutine;