const express = require('express');
/* const graphqlHTTP = require('express-graphql');*/
const cors = require('cors');
/* const schema = require('./schema'); 
const path = require('path');*/
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const toDo = require('./routes/api/toDo'); 

const app = express();

// Allow cross-origin
app.use(cors());

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

/* app.use('/graphql', 
  graphqlHTTP({
    schema,
    graphiql: true,
  })
); */

app.use(express.static('public'));

// Connect to the Mongo DB
const MONGODB_URI = 'mongodb://localhost:/toDotest';
mongoose.Promise = Promise;
mongoose
  .connect(MONGODB_URI, {useNewUrlParser: true})
  .then(()=> console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


/* app.get('*', (req,res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
}); */

app.use('/api/toDo', toDo);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));