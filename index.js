const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pry  = require('pryjs')

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 3000);
app.locals.title = 'Publications';

app.get('/api/v1/foods', (request, response) => {
  database('foods').select()
    .then((foods) => {
      response.status(200).json(foods);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

app.post('/api/v1/foods', (request, response) => {
  const food = request.body;

  for (let requiredParameter of ['name', 'calories']) {
    if (!food[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { title: <String>, author: <String> }. You're missing a "${requiredParameter}" property.` });
    }
  }

  database('foods').insert(food, 'id')
    .then(food => {
      response.status(201).json({ "food": request.body })
    })
    .catch(error => {
      response.status(400).json({ error });
    });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});
