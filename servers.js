const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const mongoose = require('mongoose');
let User = require('./user.model');

app.use(cors());
app.use(bodyParser.json());
const connectionString = "mongodb+srv://akashvermaofskt:akv%401998@mycluster-xx5kl.mongodb.net/users"
const connectionString = "mongodb+srv://akashvermaofskt:<password>@mycluster-xx5kl.mongodb.net/users"

mongoose.connect(connectionString,{ useNewUrlParser: true });
