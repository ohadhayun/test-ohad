const express = require('express');
const cors = require('cors');
const jokesRoutes = require("./Routes/joking")
const app = express();

app.use(express.urlencoded({ extended : true}));
app.use(express.json());
app.use(cors());

app.use('/', jokesRoutes);

app.listen(3001, () => {console.log("server is running..")});