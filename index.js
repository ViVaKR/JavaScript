// index.js
// import '@material/web/button/filled-button.js';
// import '@material/web/button/outlined-button.js';
// import '@material/web/checkbox/checkbox.js';

var masterJsonData = [
  { text: '초록', value: 'green' },
  { text: '파랑', value: 'blue' },
  { text: '빨강', value: 'red' },
  { text: '노랑', value: 'yellow' },
];

var detailJsonData = [
  { text: 'Light BlueGreen', value: 'green' },
  { text: 'Moss Green', value: 'green' },
  { text: 'Dark Green', value: 'green' },
  { text: 'Forest Green', value: 'green' },
  { text: 'Navy Blue', value: 'blue' },
  { text: 'Desert Blue', value: 'blue' },
  { text: 'Ice Blue', value: 'blue' },
  { text: 'red_a', value: 'red' },
  { text: 'red_b', value: 'red' },
  { text: 'red_c', value: 'red' },
  { text: 'yellow_a', value: 'yellow' },
  { text: 'yellow_b', value: 'yellow' },
  { text: 'yellow_c', value: 'yellow' },
];

// 필터링 및 맵핑 구조화
function getItemByColor(colorName) {
  let list = detailJsonData.filter((x) => x.value.trim() === colorName.trim());
  console.log('', colorName);

  // -> map
  // let text = list.map((x) => ['\t\t- ' + x.text]).join(['\n']);
  // console.log(text);

  // -> for ~ in
  // for (const key in list) {
  //   console.log(`\t\t\t${list[key].text} - ${list[key].value}`);
  // }

  // -> for loop
  for (let i = 0; i < list.length; i++) {
    const em = list[i];
    console.log('\t\t' + em.text);
  }
}

// Callers
getItemByColor('green');
getItemByColor('red');
getItemByColor('yellow');
getItemByColor('blue');

// const groupBy = function (data, key) {
//   return data.reduce(function (carry, el) {
//     var group = el[key];

//     if (carry[group] === undefined) {
//       carry[group] = [];
//     }

//     carry[group].push(el);
//     return carry;
//   }, {});
// };
// const group = groupBy(detailJsonData, 'value');

// console.log(groupByData);
