import express from 'express';
const app = express();
const port = 3000;

//Seçao rotas
app.get('/', (_req, res) => res.send('Hello World Node.jsc'));

app.all('/testeAll', (req, res) => {
  res.send(req.method);
});

app.get('/teste?', (_, res) => {
  res.send('/teste?');
});

app.get('/buzz+', (_, res) => {
  res.send('/buzz+');
});

app.get('/one*blue', (_, res) => {
  res.send('/one*blue');
});

app.post('/test(ing)?', (_, res) => {
  res.send('/test(ing)?');
});

app.get(/.*Red$/, (_, res) => {
  res.send('/.*Red$/');
});

//parametro
app.get('/testParam/:id', (req, res) => {
  res.send(req.params.id);
});

//metodo next()

app.get(
  '/testMultipleHandlers',
  (_, res, next) => {
    console.log('First method');
    next();
  },
  (_, res) => {
    console.log('Second method');
    res.end;
  }
);

//passar callback por array

const callback1 = (req, res, next) => {
  console.log('callback 1');
  next();
};

const callback2 = (req, res, next) => {
  console.log('callback 2');
  res.end();
};

app.get('/testMultipleHandlersArray', [callback1, callback2]);

//metodo route

app
  .route('/testRoute')
  .get((res, res) => {
    res.end();
  })
  .post((req, res) => {
    res.end();
  })
  .delete((req, res) => {
    res.end();
  });

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
