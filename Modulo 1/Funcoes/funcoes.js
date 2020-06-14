window.addEventListener('load', () => {
  doSpread();
  doRest();
  doDestructuring();
});

function doSpread() {
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const array3 = [...array1, ...array2];

  console.log(array3);
}

function doRest() {
  console.log(sum(1, 2, 3, 2, 4, 5, 6, 7, 8, 9, 4, 3, 4, 5, 55, 666));
}

function sum(...number) {
  const sum = number.reduce((acc, curr) => acc + curr, 0);
  return sum;
}

function doDestructuring() {
  const people = {
    results: [
      {
        name: 'Dougllas',
        age: 28,
        login: { user: 'dougllas', pass: '123456' },
      },
      { name: 'Alex', age: 27, login: { user: 'alex', pass: '654321' } },
      {
        name: 'Luciana',
        age: 25,
        login: { user: 'luciana', pass: '987654' },
      },
    ],
  };

  const data = people.results[2];
  //const user = data.login.user;
  //const pass = data.login.pass;

  //destructing
  const { user, pass } = data.login;
  console.log(user);
  console.log(pass);
}
