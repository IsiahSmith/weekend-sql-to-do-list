const express = require('express');
const listRouter = express.Router();
const pool = require(`../modules/pool.js`);

// SERVER SIDE GET
listRouter.get('/', (req, res) => {
    let queryText = `
    SELECT * FROM "weekend-to-do-app" ORDER BY "id" DESC;
    `;
    pool.query(queryText)
    .then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('error at server side GET', error);
        res.sendStatus(500);
    });
});

// SERVER SIDE POST
listRouter.post('/', (req, res) => {
    let newTask = req.body;
    console.log('Adding Task', newTask);
    let queryText = `
    INSERT INTO "weekend-to-do-app" ("task", "complete", "complete_by", "notes")
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

// SERVER SIDE PUT
listRouter.put('/:id', (req, res) => {
    let id = req.params.id;
    let queryText = `
    UPDATE "weekend-to-do-app"
    SET "complete" = true
    WHERE "id" = $1;
    `;
    pool.query(queryText, [id])
    .then(() => {
        res.sendStatus(200)
    }).catch((error) => {
        console.log('Error at server side PUT', error);
        res.sendStatus(500)
    });
});

// SERVER SIDE DELETE
listRouter.delete('/:id', (req, res) => {
    let id = req.params.id;
    let queryText = `
    DELETE FROM "weekend-to-do-app"
    WHERE "id" = $1;
    `;
    pool.query(queryText, [id])
    .then((response => {
        res.sendStatus(200);
    })).catch((error) => {
        console.log('Error at server side DELETE', error);
        res.sendStatus(500);
    });
});


module.exports = listRouter;