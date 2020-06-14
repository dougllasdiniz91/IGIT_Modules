const express = require('express');
const fs = require('fs').promises;
const router = express.Router();
const fileName = './grades.json';

//endpoint para criar uma grade
router.post('/createGrade', async (req, res) => {
  let dataRequest = req.body;
  try {
    let data = await fs.readFile(fileName, 'utf-8');
    let json = JSON.parse(data);
    dataRequest = { id: json.nextId++, ...dataRequest, timestamp: new Date() };
    json.grades.push(dataRequest);

    await fs.writeFile(fileName, JSON.stringify(json));

    res.send(dataRequest);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

//endpoint para atualizar uma grade
router.put('/updateGrade', async (req, res) => {
  try {
    let dataRequest = req.body;
    let data = await fs.readFile(fileName, 'utf-8');
    let json = JSON.parse(data);
    let searchIndex = json.grades.findIndex((index) => {
      console.log(index);
      return index.id === dataRequest.id;
    });
    if (searchIndex !== -1) {
      json.grades[searchIndex].student = dataRequest.student;
      json.grades[searchIndex].subject = dataRequest.subject;
      json.grades[searchIndex].type = dataRequest.type;
      json.grades[searchIndex].value = dataRequest.value;
      json.grades[searchIndex].timestamp = new Date();

      await fs.writeFile(fileName, JSON.stringify(json));

      res.send(json.grades[searchIndex]);
    } else {
      res.send('Grade não encontrada!!!');
    }
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

//endpoint para excluir uma grade
router.delete('/removeGrade/:id', async (req, res) => {
  try {
    let dataRequest = req.params.id;
    let data = await fs.readFile(fileName, 'utf-8');
    let json = JSON.parse(data);
    let returnIndex = await json.grades.findIndex((index) => {
      return index.id === parseInt(dataRequest);
    });
    if (returnIndex !== -1) {
      let returnData = await json.grades.filter((grade) => {
        return grade.id !== parseInt(dataRequest);
      });
      json.grades = returnData;

      await fs.writeFile(fileName, JSON.stringify(json));
      res.send(`Os dados com id = ${dataRequest} foram excluídos.`);
    } else {
      res.send('O id informado não existe.');
    }
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

//endpoint para consultar uma grade em específico
router.get('/searchGrade/:id', async (req, res) => {
  try {
    let dataRequest = req.params.id;
    let data = await fs.readFile(fileName, 'utf-8');
    let json = JSON.parse(data);
    let returnIndex = await json.grades.find((index) => {
      return index.id === parseInt(dataRequest);
    });
    if (returnIndex) {
      res.send(returnIndex);
    } else {
      res.send('O id informado não existe.');
    }
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

//endpoint para consultar a nota total de um aluno em uma disciplina
router.get('/sumGrades/:student/:subject', async (req, res) => {
  try {
    const requestStudant = req.params.student
      .toLocaleLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    const requestSubject = req.params.subject
      .toLocaleLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    let data = await fs.readFile(fileName, 'utf-8');
    let json = JSON.parse(data);

    let returnData = await json.grades.filter((grade) => {
      let gradeStudant = grade.student
        .toLocaleLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
      let gradeSubject = grade.subject
        .toLocaleLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
      return (
        gradeStudant.localeCompare(requestStudant) === 0 &&
        gradeSubject.localeCompare(requestSubject) === 0
      );
    });
    if (returnData.length !== 0) {
      let sumGrades = returnData.reduce((total, acc) => {
        return total + acc.value;
      }, 0);
      res.send(`A soma da grades: ${sumGrades}`);
    } else {
      res.send('Dados não encontrados.');
    }
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

/*endpoint para consultar a média das grades 
de determinado subject e type*/
router.get('/avgGrades/:subject/:type', async (req, res) => {
  try {
    const requestSubject = req.params.subject
      .toLocaleLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    const requestType = req.params.type
      .toLocaleLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    let data = await fs.readFile(fileName, 'utf-8');
    let json = JSON.parse(data);

    let returnData = await json.grades.filter((grade) => {
      let gradeSubject = grade.subject
        .toLocaleLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
      let gradeType = grade.type
        .toLocaleLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
      return (
        gradeSubject.localeCompare(requestSubject) === 0 &&
        gradeType.localeCompare(requestType) === 0
      );
    });
    console.log(returnData);
    if (returnData.length !== 0) {
      let cont = 0;

      let avgGrades = returnData.reduce((total, acc) => {
        cont++;
        return total + acc.value;
      }, 0);
      let avg = avgGrades / cont;
      res.send(`A média da grades é: ${avg.toFixed(2)}`);
    } else {
      res.send('Dados não encontrados.');
    }
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

/*endpoint para retornar as três melhores grades de 
acordo com determinado subject e type*/
router.get('/topThreeGrades/:subject/:type', async (req, res) => {
  try {
    const requestSubject = req.params.subject
      .toLocaleLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    const requestType = req.params.type
      .toLocaleLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    let data = await fs.readFile(fileName, 'utf-8');
    let json = JSON.parse(data);

    let returnData = await json.grades.filter((grade) => {
      let gradeSubject = grade.subject
        .toLocaleLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
      let gradeType = grade.type
        .toLocaleLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
      return (
        gradeSubject.localeCompare(requestSubject) === 0 &&
        gradeType.localeCompare(requestType) === 0
      );
    });

    if (returnData.length !== 0) {
      let newArray = [];
      let sortData = returnData.sort((a, b) => {
        return b.value - a.value;
      });
      if (sortData.length <= 3) {
        res.send(sortData);
      } else {
        for (let index = 0; index < 3; index++) {
          newArray.push(sortData[index]);
        }
        res.send(newArray);
      }
    } else {
      res.send('Dados não encontrados.');
    }
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
  res.send();
});

module.exports = router;
