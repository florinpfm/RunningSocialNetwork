const express = require('express');
const app = express();

const connectToDb = require('./config/mongoConnection');  //it is a script mongoConnection.js

// Connect to Mongo DB
connectToDb();

//Init Middleware
app.use(express.json({extended: false}));

//Just for testing
app.get('/', (request, response) => response.json({ msg: 'Test Initial Setup ...'}));

// Routes (API endpoints)
app.use('/api/auth', require('./api/auth'));
app.use('/api/users', require('./api/users'));
app.use('/api/profile', require('./api/profile'));
app.use('/api/posts', require('./api/posts'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port ' + PORT));

