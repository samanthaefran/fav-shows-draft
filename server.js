// require dependencies
const express = require('express');
const mongoose = require('mongoose');

// initialize express app
const app = express();

// configure settings
const PORT = 3000; 

// tell the app to listen
app.listen(PORT, () => {
  console.log('it works!');
})

// connect to and config mongoDB
const DATABASE_URL = 'mongodb+srv://admin:abc1234@cluster0.4hms2.mongodb.net/myFaveShow?retryWrites=true&w=majority'

mongoose.connect(DATABASE_URL);

//  shortcut variable which will be used in the mongodb listeners

const db = mongoose.connection;

// listeners for mongodb events

db.on('connected',() => console.log('connected'))

db.on('error', (error) => console.log('mongodb error' + error.message));

