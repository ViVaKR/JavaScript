// 수정 원본 (데모용)
const obj = [
  {
    id: '1',
    contents: '<p>내용1</p>',

    meta: {
      no: '1',
      createdAt: '2023-10-7T14:10:22.907Z',
      lastModified: '2023-09-28T14:10:22.907Z',
    },
  },
  {
    id: '2',
    contents: '<p>내용2</p>',
    meta: {
      no: '2',
      createdAt: '2022-09-29T14:10:22.907Z',
      lastModified: '2023-09-29T14:10:22.907Z',
    },
  },
  {
    id: '3',
    contents: '<p>내용3</p>',
    meta: {
      no: '3',
      createdAt: '2019-11-3T14:10:22.907Z',
      lastModified: '2023-09-29T14:10:22.907Z',
    },
  },
  {
    id: '4',
    contents: '<p>내용4</p>',
    meta: {
      no: '4',
      createdAt: '2020-09-13T14:10:22.907Z',
      lastModified: '2023-09-29T14:10:22.907Z',
    },
  },
];

// 태그 제거
const regex = /(<([^>]+)>)/gi;
let newarray = obj.map(function (str) {
  str.contents = str.contents.replace(regex, '');
  return str;
});

// 정렬 : a 와 b 의 순서를 바꾸면 정렬 방향이 순방향 역방향 등으로 바뀜
newarray.sort(function (a, b) {
  return a.meta.createdAt.localeCompare(b.meta.createdAt);
});

// (최종) Array 출력
console.log(newarray);

// (참조) Json 출력
const jsonStr = JSON.stringify(newarray);
console.log(jsonStr);
