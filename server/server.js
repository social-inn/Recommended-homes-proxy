/* eslint-disable prefer-arrow-callback */
require('newrelic');
const express = require('express');
// const proxy = require('http-proxy-middleware');
const request = require('request');

const app = express();
const port = 3333;

// app.use(express.static(path.join(__dirname + '/../public')));

// const { routes } = require('./proxyconfig.json');

app.get('/rooms/:id', function getRoomsServer(req, res) {
//   axios.get(`http://localhost:3883/rooms/${req.params.id}`)
//     .then(function (response) {
//         res.send(response).status(200);
//     })
//     .catch(function (error) {
//         res.send('error').status(500);
//     });

  request.get(`http://localhost:3883/rooms/${req.params.id}`)
    .on('response', (response) => {
        res.send(response).status(200);
    })
    .on('error', (error) => {
        res.send('error').status(500);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
