/* eslint-disable prefer-arrow-callback */
require('newrelic');
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3333;

app.use(express.static(__dirname+ '/../public'));

app.get('/rooms/:id', function getRoomsServer(req, res) {
  axios.get('http://52.14.173.208:3883/rooms/' + req.params.id)
    .then(function (response) {
      res.send(response.data).status(200);
    })
    .catch(function (error) {
      res.send(error).status(500);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
