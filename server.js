const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const path = require('path');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const app = express();

// Allow cross-origin
app.use(cors());

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use('/graphql', 
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use(express.static('public'));

// Connect to the Mongo DB
const MONGODB_URI = process.env.MONGODB_URI; // need to add OR for the DB on the net
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});


app.get('*', (req,res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Now browse to localhost:5000/graphql'));