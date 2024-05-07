const express = require('express');
const { connectDb } = require('./helpers/db');
const { port, host, db, apiUrl } = require('./configuration');
const axios = require('axios');
const app = express();


const startServer = () => {
  app.listen(port, async () => {
    console.log(`Auth server started on port ${port}`);
    console.log(`Auth server started on host ${host}`);
    console.log(`Database: ${db}`);
  })
}

app.get('/test', (req, res) => {
  res.send('Our auth server is working correctly');
})

app.get('/api/testwithapidata', (req, res) => {
  console.log('apiUrl', apiUrl);
  axios.get(apiUrl + '/testapidata').then((response) => {
    res.json({
      testwithapi: response.data.testwithapi
    });
  });
})

app.get('/api/currentUser', (req, res) => {
  res.json({
    id: '1234',
    email: 'foo@gmail.com'
  });
});


connectDb()
  .on('error', (e) => console.log('error', e))
  .on('disconnect', connectDb)
  .once('open', startServer)

