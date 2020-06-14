const express = require('express');
const fs = require('fs').promises;

const router = express.Router();

/*
  recebe como parâmetro o UF do estado e
  retorna a quantidade de cidades
*/
router.get('/uf/:uf', async (req, res) => {
  try {
    const uf = await fs.readFile(`./UFs/${req.params.uf}.json`, 'utf-8');
    const jsonUf = JSON.parse(uf);
    res.send(`Quantidade de cidades no ${req.params.uf}: ${jsonUf.length}`);
  } catch (err) {
    res.send({ error: err.message });
  }
});

//retorna os cinco estados que mais possuem cidades
router.get('/topFiveUf', async (req, res) => {
  try {
    let topUf = [];
    let topFiveUf = [];

    const ufs = await fs.readFile('./Estados.json', 'utf-8');
    const jsonUf = JSON.parse(ufs);

    for (let index = 0; index < jsonUf.length; index++) {
      const returnUf = await fs.readFile(
        `./UFs/${jsonUf[index].Sigla}.json`,
        'utf-8'
      );
      const jsonReturnUf = JSON.parse(returnUf);
      let dataJson = { Sigla: jsonUf[index].Sigla, len: jsonReturnUf.length };
      topUf.push(dataJson);
    }
    const sortedUf = topUf.sort((a, b) => {
      return b.len - a.len;
    });
    for (let index = 0; index < 5; index++) {
      let string = `${topUf[index].Sigla} - ${topUf[index].len}`;
      topFiveUf.push(string);
    }
    res.send(topFiveUf);
  } catch (err) {
    res.send({ error: err.message });
  }
});

//retorna os cinco estados que menos possuem cidades
router.get('/downFiveUf', async (req, res) => {
  try {
    let downUf = [];
    let downFiveUf = [];

    const ufs = await fs.readFile('./Estados.json', 'utf-8');
    const jsonUf = JSON.parse(ufs);

    for (let index = 0; index < jsonUf.length; index++) {
      const returnUf = await fs.readFile(
        `./UFs/${jsonUf[index].Sigla}.json`,
        'utf-8'
      );
      const jsonReturnUf = JSON.parse(returnUf);
      let dataJson = { Sigla: jsonUf[index].Sigla, len: jsonReturnUf.length };
      downUf.push(dataJson);
    }
    const sortedUf = downUf.sort((a, b) => {
      return a.len - b.len;
    });

    for (let index = 4; index >= 0; index--) {
      let string = `${downUf[index].Sigla} - ${downUf[index].len}`;
      downFiveUf.push(string);
    }
    console.log(downFiveUf);
    res.send(downFiveUf);
  } catch (err) {
    res.send({ error: err.message });
  }
});

//retorna a cidade de maior nome de cada estado
router.get('/biggerNameCityForUf', async (req, res) => {
  const bigCities = [];
  const cities = [];

  const ufs = await fs.readFile('./Estados.json', 'utf-8');
  const jsonUf = JSON.parse(ufs);

  for (let index = 0; index < jsonUf.length; index++) {
    const returnUf = await fs.readFile(
      `./UFs/${jsonUf[index].Sigla}.json`,
      'utf-8'
    );
    const jsonReturnUf = JSON.parse(returnUf);

    cities.push(jsonReturnUf);
  }

  for (let index = 0; index < cities.length; index++) {
    let city = cities[index].sort((a, b) => {
      if (b.Nome.length - a.Nome.length === 0) {
        let x = a.Nome;
        let y = b.Nome;
        if (x.toLowerCase() > y.toLowerCase()) {
          return 1;
        }
        if (x.toLowerCase() < y.toLowerCase()) {
          return -1;
        }
      } else {
        return b.Nome.length - a.Nome.length;
      }
    });

    console.log(`[${city[0].Nome} - ${jsonUf[index].Sigla}]`);
    bigCities.push(`${city[0].Nome} - ${jsonUf[index].Sigla}`);
  }

  res.send(bigCities);
});

//retorna a cidade de menor nome de cada estado
router.get('/smallerNameCityForUf', async (req, res) => {
  const smallCities = [];
  const cities = [];

  const ufs = await fs.readFile('./Estados.json', 'utf-8');
  const jsonUf = JSON.parse(ufs);

  for (let index = 0; index < jsonUf.length; index++) {
    const returnUf = await fs.readFile(
      `./UFs/${jsonUf[index].Sigla}.json`,
      'utf-8'
    );
    const jsonReturnUf = JSON.parse(returnUf);

    cities.push(jsonReturnUf);
  }

  for (let index = 0; index < cities.length; index++) {
    let city = cities[index].sort((a, b) => {
      if (b.Nome.length - a.Nome.length === 0) {
        let x = a.Nome;
        let y = b.Nome;
        if (x.toLowerCase() > y.toLowerCase()) {
          return 1;
        }
        if (x.toLowerCase() < y.toLowerCase()) {
          return -1;
        }
      } else {
        return a.Nome.length - b.Nome.length;
      }
    });

    console.log(`[${city[0].Nome} - ${jsonUf[index].Sigla}]`);
    smallCities.push(`${city[0].Nome} - ${jsonUf[index].Sigla}`);
  }

  res.send(smallCities);
});

//retorna a cidade de maior nome entre todos os estados
router.get('/biggerNameCityAllUf', async (req, res) => {
  const bigCities = [];
  const cities = [];
  const bigNameCity = [];

  const ufs = await fs.readFile('./Estados.json', 'utf-8');
  const jsonUf = JSON.parse(ufs);

  for (let index = 0; index < jsonUf.length; index++) {
    const returnUf = await fs.readFile(
      `./UFs/${jsonUf[index].Sigla}.json`,
      'utf-8'
    );
    const jsonReturnUf = JSON.parse(returnUf);

    cities.push(jsonReturnUf);
  }

  for (let index = 0; index < cities.length; index++) {
    let city = cities[index].sort((a, b) => {
      if (b.Nome.length - a.Nome.length === 0) {
        let x = a.Nome;
        let y = b.Nome;
        if (x.toLowerCase() > y.toLowerCase()) {
          return 1;
        }
        if (x.toLowerCase() < y.toLowerCase()) {
          return -1;
        }
      } else {
        return b.Nome.length - a.Nome.length;
      }
    });
    bigCities.push({ nome: city[0].Nome, uf: jsonUf[index].Sigla });
  }
  let nameCity = bigCities.sort((a, b) => {
    if (b.nome.length - a.nome.length === 0) {
      let x = a.nome;
      let y = b.nome;
      if (x.toLowerCase() > y.toLowerCase()) {
        return 1;
      }
      if (x.toLowerCase() < y.toLowerCase()) {
        return -1;
      }
    } else {
      return b.nome.length - a.nome.length;
    }
  });
  bigNameCity.push(nameCity);
  console.log(bigNameCity[0][0]);
  res.send(bigNameCity[0][0]);
});

//retorna a cidade de menor nome entre todos os estados
router.get('/smallerNameCityAllUf', async (req, res) => {
  const smallCities = [];
  const cities = [];
  const smallNameCity = [];

  const ufs = await fs.readFile('./Estados.json', 'utf-8');
  const jsonUf = JSON.parse(ufs);

  for (let index = 0; index < jsonUf.length; index++) {
    const returnUf = await fs.readFile(
      `./UFs/${jsonUf[index].Sigla}.json`,
      'utf-8'
    );
    const jsonReturnUf = JSON.parse(returnUf);

    cities.push(jsonReturnUf);
  }

  for (let index = 0; index < cities.length; index++) {
    let city = cities[index].sort((a, b) => {
      if (b.Nome.length - a.Nome.length === 0) {
        let x = a.Nome;
        let y = b.Nome;
        if (x.toLowerCase() > y.toLowerCase()) {
          return 1;
        }
        if (x.toLowerCase() < y.toLowerCase()) {
          return -1;
        }
      } else {
        return a.Nome.length - b.Nome.length;
      }
    });
    smallCities.push({ nome: city[0].Nome, uf: jsonUf[index].Sigla });
  }
  let nameCity = smallCities.sort((a, b) => {
    if (b.nome.length - a.nome.length === 0) {
      let x = a.nome;
      let y = b.nome;
      if (x.toLowerCase() > y.toLowerCase()) {
        return 1;
      }
      if (x.toLowerCase() < y.toLowerCase()) {
        return -1;
      }
    } else {
      return a.nome.length - b.nome.length;
    }
  });
  smallNameCity.push(nameCity);
  console.log(smallNameCity[0][0]);
  res.send(smallNameCity[0][0]);
});

module.exports = router;
