const Controller = require('./_controller');
const Project = require('../models/project.js');

const router = new Controller(Project).withGetAll().router();

module.exports = router;
