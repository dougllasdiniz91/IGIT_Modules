window.addEventListener('load', function () {
  fetch('https://api.github.com/users/dmdiniz')
    .then((res) => {
      res.json().then((data) => {
        showData(data);
      });
    })
    .catch((error) => {
      console.log('Erro na requisição');
    });

  executeDivisionPromise();
  executeDivisionPromiseAsyncAwait();
});

function showData(data) {
  const user = document.querySelector('#user');
  user.textContent = data.login + ' ' + data.name;
}

function divisonPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject('Não é possível divisão por 0!');
    }

    resolve(a / b);
  });
}

function executeDivisionPromise() {
  divisonPromise(12, 6)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log('Falha na divisão: ' + error);
    });
}

async function executeDivisionPromiseAsyncAwait() {
  const division = await divisonPromise(12, 4);
  console.log(division);
}
