// require dependencies
const express = require('express');
const mongoose = require('mongoose');
const Show = require('./models/show');
// initialize express app
const app = express();

// configure settings
const PORT = 3000; 


// connect to and config mongoDB
const DATABASE_URL = 'mongodb+srv://admin:abc1234@cluster0.4hms2.mongodb.net/myFaveShow?retryWrites=true&w=majority'

mongoose.connect(DATABASE_URL);

//  shortcut variable which will be used in the mongodb listeners

const db = mongoose.connection;

// listeners for mongodb events

db.on('connected',() => console.log('connected'))

db.on('error', (error) => console.log('mongodb error' + error.message));

// mount middleware 
app.use(express.urlencoded({extended: false})) 

// create route
app.post('/shows', (req, res) => {
  Show.create(req.body, (err, show) => {
    res.send(show)
  })
})

// index route
app.get('/shows', (req, res) => {
  Show.find({}, (err, shows) => {
    res.send(shows);
  });
});

// show route
app.get('/shows/:id', (req, res) => {
  Show.findById(req.params.id, (err, foundShow) => {
    res.send(foundShow);
  });
});

// delete route
app.delete('/shows/:id', (req, res) => {
  Show.findByIdAndDelete(req.params.id, (err, copyOfDeletedShow)=> {
    res.send(copyOfDeletedShow);
  });
});

// update route
app.put('/shows/:id', (req, res) => {
  Show.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedShow) => {
  res.send(updatedShow);
  });
});


// tell the app to listen
app.listen(PORT, () => {
  console.log('it works!');
})
