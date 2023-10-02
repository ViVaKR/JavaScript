import './style.css';

import _ from 'lodash';

import Icon from '../src/avata-bj.png'
import hello from '../src/hello';
import world from '../src/world';

import Notes from './data.csv';
import json from './data.json5';
import toml from './data.toml';
import Data from './data.xml';
import yaml from './data.yaml';
import printMe from './print';

console.log(toml.title);       // output `TOML Example`
console.log(toml.owner.name);  // output `Tom Preston-Werner`

console.log(yaml.title);       // output `YAML Example`
console.log(yaml.owner.name);  // output `Tom Preston-Werner`

console.log(json.title);       // output `JSON5 Example`
console.log(json.owner.name);  // output `Tom Preston-Werner`

function component() {
  const element = document.createElement('h1');
  const btn = document.createElement('button');

  element.innerHTML = _.join([hello, world, '</br>'], ' ');
  element.classList.add('hello');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  console.log(Data);
  console.log(Notes);
  return element;
}

document.body.appendChild(component());