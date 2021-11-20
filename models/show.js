// We will require dependencies on this one as well
const mongoose = require('mongoose');

// defining a schema 
const showSchema = new mongoose.Schema({
  title: String,
  yearReleased: String,
  starring: String
})

// module.exports will allow us to 'import' this to our server.js file. all of the routes we created will work with this! 
module.exports = mongoose.model('Show', showSchema);