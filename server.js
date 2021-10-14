const express = require('express');
const app = express();

const connectToDb = require('./config/mongoConnection');
connectToDb();

// app.get('/', (request, response) => 
// response.json({ msg: 'Test Initial Setup ...'})
// );

// api endpoints
app.use('/api/auth', require('./api/auth'));
app.use('/api/posts', require('./api/posts'));
app.use('/api/profile', require('./api/profile'));
app.use('/api/users', require('./api/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port ' + PORT));

