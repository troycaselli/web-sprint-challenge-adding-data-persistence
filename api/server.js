const express = require('express');

const server = express();

server.use(express.json());

server.use('*', (req, res) => {
    res.status(404).json({
        message: `Path ${req.path} not found`
    });
});

module.exports = server;