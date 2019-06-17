/* eslint-disable prefer-arrow-callback */
require('newrelic');
const express = require('express');
const request = require('request');

const app = express();
const port = 3333;

app.get('/rooms/:id', function getRoomsServer(req, res) {
  request.get('http://52.14.173.208:3883/rooms/' + req.params.id)
    .on('response', (response) => {
        res.send(response).status(200);
    })
    .on('error', (error) => {
        res.send('error').status(500);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
