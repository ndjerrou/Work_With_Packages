// DEALING WITH FILES with the code node module FS

const fs = require('node:fs');
const promisifyFs = require('node:fs/promises'); // this package rewrites the fs module and provides based-methods with promises

const obj = {
  name: 'Nissim',
  hobbies: ['roller', 'foot'],
};

// we need to save our data in the string format
const objString = JSON.stringify(obj);

// synchrone ou bloquant
fs.writeFileSync('test.txt', objString); // careful to the method's name ! here SYNC

// asynchrone ou non-bloquante
fs.writeFile('test.txt', objString, (err, data) => {
  // using the callback pattern to handle asynchronous code
  if (err) {
    console.log(err.message);
    process.exit(1);
  }
});

// Manipulate fs methods with the fs/promises package which is super usefull

promisifyFs
  .writeFile('test-async.txt', objString)
  .then(data => console.log('writting successfully'))
  .catch(err => console.log(err.message));

promisifyFs
  .readFile('./test-async.txt', 'utf-8')
  .then(data => console.log(JSON.parse(data).name))
  .catch(err => console.log(err.message));
