const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const listRouter = require('./routes/list.router')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));
app.use('/to_do_list', listRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});