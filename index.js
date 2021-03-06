'use strict'

const express = require ('express');
const cors = require ('cors');
const app = express();
const PORT = 3001;
// const routes = require ('./routes/routes.js')


app.get('/', (req, res) => {
    // should respond with a the message below. 
    res.send('Hey, you hit my get route!');
  });

  app.post('/', (req, res) => {
    // should respond with a the message below. 
    res.send('Hey, you hit my post route!');
  });

  app.put('/', (req, res) => {
    // should respond with a the message below. 
    res.send('Hey, you hit my put route!');
  });

  app.delete('/', (req, res) => {
    // should respond with a the message below. 
    res.send('Hey, you hit my delete route!');
  });

app.listen(PORT, () => console.log(`Server is Running on ${PORT}`));