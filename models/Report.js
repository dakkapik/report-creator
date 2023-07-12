const mongoose = require("mongoose")

// Define the Report schema
const reportSchema = new mongoose.Schema({
  title: String,
  intro: String,
  body: String,
  conclusion: String,
});

module.exports = mongoose.model('Report', reportSchema);
