#!/usr/bin/env node

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 2727;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.post('/labels', (req, res) => {
    res.redirect(`/labels.html?names=${req.body.names}`)
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});