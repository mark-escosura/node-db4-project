const express = require('express');
const server = express();
const router = require('./recipes/recipes-router');

server.use(express.json());

server.use('/api/recipes', router);

server.use('*', (req, res) => {
  res.json({ api: 'up' });
});

module.exports = server;
