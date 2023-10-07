'use strict';

/*

  Promise is a JavaScript object for asynchronous operation.
  State: pending -> fulfilled or rejected
  Producer vs consumer

*/

/* Producer  */
const promise = (time) =>
    new Promise((res, rej) => {
        const check = parseInt(time);
        if (isNaN(check)) {
            rej('time is not an integer');
        }

        setTimeout(() => {
            res('Viv');
        }, time);
    });

promise('Hi') //
    .then((x) => console.log(x))
    .catch((err) => {
        promise(1000).then((x) => console.log(`After ${err}, 1000 => ${x}`));
    })
    .finally(() => {
        console.log('finally');
    });

/* async await */
function delay(ms) {
    return new Promise((res) => setTimeout(res, ms));
}

async function getApple() {
    await delay(1000);
    return `'🍎' ${new Date().getSeconds()}`;
}

async function getBanana() {
    await delay(1000);
    return `'🍌' ${new Date().getSeconds()}`;
}

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();

    const apple = await applePromise;
    const banana = await bananaPromise;

    return `${apple} + ${banana}`;
}

// usefull APIs

function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then((x) => x.join(' + '));
}

function pickFirstFruits() {
    return Promise.race([getApple(), getBanana()]);
}
pickFruits().then((x) => console.log(x));
pickAllFruits().then((x) => console.log(x));
pickFirstFruits().then((x) => console.log(x));

try {
    const rs = 23 / 0;
    console.log(rs);
} catch (err) {
    console.log(err);
}

// Promise chaining
const fetchNumber = (sec) =>
    new Promise((res, rej) => {
        setTimeout(() => res(10), sec);
    });

fetchNumber(2000)
    .then((x) => x * 3)
    .then((x) => x * 2)
    .then((x) => {
        return new Promise((res, rej) => {
            setTimeout(() => res(x - 1), 1000);
        });
    })
    .then((x) => console.log(x));

const getHen = () =>
    new Promise((res, rej) => {
        setTimeout(() => res('🐓'), 1000);
    });

const getEgg = (hen) =>
    new Promise((res, rej) => {
        setTimeout(() => res(`${hen} => 🥚`));
    });

const cook = (egg) =>
    new Promise((res, rej) => {
        setTimeout(() => res(`${egg} => 🍛`, 1000));
    });

getHen()
    .then((hen) => getEgg(hen))
    .catch((x) => {
        return '🍔';
    })
    .then((egg) => cook(egg))
    .then((x) => console.log(x))
    .catch((err) => console.log(err));

// 1 Create a promise

// const promise = new Promise((resolve, reject) => {
//  2 Do some async task
//   setTimeout(() => {
//     console.log('Async task complete');
//     resolve();
//   }, 1000);
// });

// promise.then(() => {
//   console.log('Promise consumed..');
// });

// const getUser = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;

//     if (!error) {
//       resolve({ name: 'John', age: 30 });
//     } else {
//       reject('Error: Something went wrong');
//     }
//   }, 1000);
// });

// getUser
//   .then((user) => console.log(user))
//   .catch((error) => console.log(error))
//   .finally(() => console.log('The promise has been resolved or rejected'));

// console.log('Hello from global scope');
