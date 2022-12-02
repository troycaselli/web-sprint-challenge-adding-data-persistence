const express = require('express');
const resourcesRouter = require('./resource/router');
const projectsRouter = require('./project/router');
const tasksRouter = require('./task/router');

const server = express();

server.use(express.json());

server.use('/api/resources', resourcesRouter);
server.use('/api/projects', projectsRouter);
server.use('/api/tasks', tasksRouter);

server.use('*', (req, res) => {
    res.status(404).json({
        message: `Path ${req.path} not found`
    });
});

module.exports = server;