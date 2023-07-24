const mongoose = require("mongoose")

// Define the Report schema
const reportSchema = new mongoose.Schema({
  // create objects in order to have dynamic expansion
  author_names: String,// this should be array with it's own verification
  affiliations: String,
  contact_information: String,
  abstract_content: String,
  introduction_content: String,
  section1_content: String,
  section2_content: String,
  reference1: String
});

module.exports = mongoose.model('Report', reportSchema);
