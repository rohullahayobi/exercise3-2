const Schema = require('mongoose').Schema;

const modelSchema = new Schema({
  // TODO
    category: String,
    title: String,
    description: String,
    project_start: { type: Date, default: Date.now },
    project_end: Date,
    funding_goal: Number,
    funding_start: Date,
    funding_end: Date,

});

// global db
module.exports = db.model('Project', modelSchema);


