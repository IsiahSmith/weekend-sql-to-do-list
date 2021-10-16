const express = require('express');
const listRouter = express.Router();
const pool = require(`../modules/pool.js`);

listRouter.get('/', (req, res) => {
    let queryText = `SELECT * FROM "to_do_list" ORDER BY "id" DESC;`;
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('error getting tasks', error);
        res.sendStatus(500);
    });
});






module.exports = listRouter;