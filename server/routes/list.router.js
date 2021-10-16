const express = require('express');
const listRouter = express.Router();
const pool = require(`../modules/pool.js`);

listRouter.get('/', (req, res) => {
    let queryText = `
    SELECT * FROM "to_do_list" ORDER BY "id" DESC;
    `;
    pool.query(queryText)
    .then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('error at server side GET', error);
        res.sendStatus(500);
    });
});

listRouter.post('/', (req, res) => {
    let newTask = req.body;
    console.log('Adding Task', newTask);
    let queryText = `
    INSERT INTO "to_do_list" ("task", "complete", "complete_by", "notes")
    VALUES ($1, $2, $3, $4);
    `;
    pool.query(queryText, [newTask.task, newTask.complete, newTask.complete_by, newTask.notes])
    .then((result) => {
        console.log('Task Added: ', result);
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error at server side POST', error);
        res.sendStatus(500);
    });
});






module.exports = listRouter;