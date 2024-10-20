// backend/app.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');


const app = express();

app.use(cors());
app.use(express.json());

// connecting to mongodb database
mongoose.set("strictQuery", false);
const mongodb_uri = process.env.MONGODB_URI;
async function main() {
  await mongoose.connect(mongodb_uri);
}
main().catch((err) => console.log(err));


app.use('/api/tasks', taskRoutes);

module.exports = app;
