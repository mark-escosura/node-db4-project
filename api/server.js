const express = require('express');
const server = express();
const router = require('./recipes/recipes-router');

server.use(express.json());

server.use('/api/recipes', router);

module.exports = server;
