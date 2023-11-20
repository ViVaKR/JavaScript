import hooks from 'node:async_hooks'
import { Buffer } from 'node:buffer';

// const { Console } = require('node:console');
const { Console } = console;

const eid = hooks.executionAsyncId();
console.log(eid);

const tid = hooks.triggerAsyncId();
console.log(tid);

let buf = Buffer.from('hello world', 'utf8');
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));
console.log(Buffer.from('fhqwhgads', 'utf-8'));

buf = Buffer.from([1, 2, 3, 4]);
const uint32array = new Uint32Array(buf);
console.log(uint32array);

console.log('Hello World %s', 'Fine Thanks');

console.error(new Error('Whoops, something bad happend'));

const name = 'Will Robinson';
console.warn(`Danger ${name} Dnager`);
