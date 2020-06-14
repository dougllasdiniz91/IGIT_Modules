const express = require('express');
const fs = require('fs').promises;
const routerCitiesForUf = require('./routes/createCitiesForUf.js');
const routerSearchCitiesForUf = require('./routes/searchCitiesForUf');
const app = express();

app.use(express.json());
app.use('/create', routerCitiesForUf);
app.use('/search', routerSearchCitiesForUf);

app.listen(3000, async () => {
  try {
    await fs.readFile('./Estados.json', 'utf8');
    await fs.readFile('./Cidades.json', 'utf8');
    console.log('api restarted');
  } catch (error) {
    console.log(error);
  }
});
