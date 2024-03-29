

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

//Body Parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//Connect to database
mongoose.connect(db)
  .then(() => console.log("Connected to mongodb!"))
  .catch(err => console.log(err));

app.get('/',(req,res) => {
  res.send('<h1>Hello</h1>');
});

//Passport middleware
app.use(passport.initialize());

//Passport config
require('./config/passport')(passport);

//routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  app.get('*',(req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on ${port}.`));
