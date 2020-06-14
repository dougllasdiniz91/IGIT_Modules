const express = require('express');
const fs = require('fs');
const app = express();
const controllerRouter = require('./routes/controller-router');

app.use(express.json());
app.use('/grades-control-api', controllerRouter);

app.listen(3000);
