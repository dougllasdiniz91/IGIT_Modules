const express = require('express');
const fs = require('fs').promises;

const router = express.Router();

router.post('/citiesForUf', async (req, res) => {
  const ufs = await fs.readFile('./Estados.json', 'utf-8');
  const cities = await fs.readFile('./Cidades.json', 'utf-8');
  const jsonUF = JSON.parse(ufs);
  const jsonCities = JSON.parse(cities);

  jsonUF.forEach(async (uf) => {
    const citiesForUf = jsonCities.filter((city) => {
      return city.Estado === uf.ID;
    });
    await fs.writeFile(`./UFs/${uf.Sigla}.json`, JSON.stringify(citiesForUf));
  });

  res.end();
});

module.exports = router;
