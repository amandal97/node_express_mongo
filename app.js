const express = require('express');
const mongoose = require('mongoose');
const postsRoute = require('./routes/posts')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

const app = express();

// Middleware
app.use(cors())
app.use(bodyParser.json())

// Now we have ability to create routes
app.get('/', (req, res) => {
    res.send("We are on home");
});
app.use('/posts', postsRoute);

// DB Connection
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true })
    .then(() => console.log("connected to DB"))
    .catch(err => console.log("error connecting to DB", err))

/**
 * Listening to the server
 * @param port 
 */
app.listen(3000, () => console.log("App listening to port 3000!"));