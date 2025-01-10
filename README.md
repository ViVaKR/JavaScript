# JavaScript

## [What is JavaScript](https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/What_is_JavaScript)

- A technology that we use to create websites
- Giving instructions to a computer.
- The Computer follows our instructions.
- Computer -> WebSite, Phone -> App
- Technologies
    1. HTML : Create WebSite Contents
    2. CSS  : Changes the appearance
    3. JavaScript : Makes interactive
- 웹페이지 수정

## What Ia JavaScript Used For?

- DOM (Document Object Model) Manipulation
- Event Handling
- Asynchronous Requests
- Animations & Effects
- Data manipulation (Sorting, filtering, etc)
- Storing Data (Cookies, LocalStorage, etc)
- Single Page Applications (SPA)
- Creating APIs & Web Services (Node.js, [Deno](https://deno.com))

## Why Learn JavaScript?

- Popularity
    - One of the most widly used languages. Many job opportunities
- Versatility
    - used for many different thins, such as dynamic web pages, APIs, mobile and even desktop appkications
- Relatively Easy To Learn
    - Compared to other lowe level languages, JavaScript is pretty easy to learn and a great language to staft with
- Community
    - Great community, support, resources and tools

## Environment

## API

> 개발자가 직접 구현하기 어렵거나 불가능한 기능들을 미리 만들어서 제공하는 프로그램.

1. Browser API
   1. DOM (Document Object Model) API : 문서 객체 모델
      1. 페이지와 스크립트 및 프로그래밍 언어를 연결
      2. 스크립트 : JavaScript
      3. 문서를 논리 트리로 표현
   2. Geolocation API
   3. Canvas
   4. WebGL API
   5. HTMLMediaElement
   6. WebRTC
2. Third-Paty API

## Safari

## Execution Context
>
> JavaScript를 실행하면 코드 변환 및 실행을 처리하기 위한 특수 환경이 생성됩니다.
> 이것을 실행 컨텍스트라고 합니다.
> 여기에는 현재 실행 중인 코드와 실행에 도움이 되는 모든 것이 포함되어 있습니다.
> 호출된 모든 함수에 대한 함수 실행 컨텍스트뿐만 아니라 전역 실행 컨텍스트도 있습니다.

## Execution Context Phases

- Memory Creation Phase 메모리 생성 단계:
   1. Create the global object (brower = window, Node.js = global)
   2. Create the 'this' object and bind it to the global object
   3. Setup memory heap for storing variables and function references
   4. Store functions and variables in global execution context and set to "undefined"
- Execution Phase 실행 단계:
   1. Execute code line by line
   2. Create a new execution context for each function call

---

## DOM (Document Object Medel)

- Programmin Interface for web/HTML elements
- Structure that we can interact with via JavaScript
- Includes tags, attributes, text nodes etc
- Represented as a tree structure

## ECMAScript Editions

- ES1 : ECMAScript 1 (1997), The Original JavaScript
- ES2 : ECMAScript 2 (1998), The Original JavaScript
- ES3 : ECMAScript 3 (1999), The Original JavaScript
- ES4 : ECMAScript Never Released
- `ES5` : ECMAScript 2009, The First Main Revision
- `ES6` : ECMAScript 2015, The Second Revision
- ES7 : ECMAScript 2016
- ECMAScript 2017
- ES8 : ECMAScript 2017
- ES9 : ECMAScript 2018
- ECMAScript 2019
- ES10 : ECMAScript 2020

## JavaScript Engines

- Chrome : `V8`
- Safari : `JSCore`

## DOM (Document Object Model)

- Use it to Manipulate Content.

>- Modern Web Browser
- Google Chrome
- Firefox
- Safari
- Microsoft Edge

>- Code Editor
1. Visual Studio Code
2. Atom
3. Sublime Text
4. Codespaces

> Sturcture of Tutorial
>- What the DOM is
>- Methods to Select Elements in the DOM
>- How to Traverse the DOM
>- How to Manipulate the DOM
>- Event Handling

## DOM Manipulation

```js

getElementById()
getElementByClassName()
getElementsByTagName()
querySelector()
querySelectorAll()

// examples
const title = document.getElementById('main-heading');
console.log(title.innerHTML);

const listItem = document.getElementsByClassName('list-items');
console.log(listItem);
Array.prototype.forEach.call(listItem, function (item) {
    console.log(item.innerHTML);
});

const container = document.querySelector('div');
console.log(container.innerHTML);


const containerAll = document.querySelectorAll('div');
console.log(containerAll);

```

>- Interface

> DOM Node Interface
> 자바스크립트의 노드 타입은 모두 Node를 상속하므로 모든 노드 타입에서 같은 기본 프로퍼티와 메서드를 공유한다.

- ELEMENT_NODE  =  1
- ATTRIBUTE_NODE  =  2
- TEXT_NODE  =  3
- CDATA_SECTION_NODE  =  4
- ENTITY_REFERENCE_NODE  =  5
- ENTITY_NODE  =  6
- PROCESSING_INSTRUCTION_NODE  =  7
- COMMENT_NODE  =  8
- DOCUMENT_NODE  =  9
- DOCUMENT_TYPE_NODE  =  10
- DOCUMENT_FRAGMENT_NODE  =  11
- NOTATION_NODE  =  12
- DOCUMENT_POSITION_DISCONNECTED  =  1
- DOCUMENT_POSITION_PRECEDING  =  2
- DOCUMENT_POSITION_FOLLOWING  =  4
- DOCUMENT_POSITION_CONTAINS  =  8
- DOCUMENT_POSITION_CONTAINED_BY  =  16
- DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC  =  32

```javascript
if (myNode.nodeType == 1) {
   console.log('element');
}
```

- 노드 객체는 Node로부터 프로퍼티와 메서드를 상속받는다.또한 Node객체 역시 객체이므로 Object.prototype을 상속 받는다.
	Object < Node < Element < HTMLElement < (e.g, HTML * Element)
	Object < Node < Attr
	Object < Node < CharacterData < Text
	Object < Node < Document < HTMLDocument
	Object < Node < DocumentFragement

## 노드의 주요 프로퍼티와 메서드

	nodeType
	nodeName
	nodeValue
	childNodes
	parentNode
	firstChild
	lastChild
	nextSibiling
	previousSibling

	appendChild()
	cloneNode()
	compareDocumentPosotion()
	contains()
	hasChildNodes()
	insertBefore()
	isEqualNode()
	removeChild()
	replaceChild()

nodeName, nodeValue 프로퍼티
nodeName과 nodeValue 프로퍼티는 해당 노드의 정보를 제공한다.프로퍼티 값은 노드 타입에 따라 완전히 다르므로 이 값을 사용하기 전에는 항상 노드 타입을 테스트해주는게 좋다.

if (someNode.nodeType == 1 /*== Node.ELEMENT_NODE*/) {
    value = someNode.nodeName;    // 요소 노드라면, 요소의 태그 이름
}

노드가 요소 노드라면 nodeName은 항상 요소 태그의 이름과 일치하며, nodeValue는 항상 null이다.

//--> 노드 사이의 관계

모든 노드는 다른 노드와 관계가 있다.이런 관계는 문서 트리를 가족 계보처럼 생각해서 가족 관계로 설명하곤 한다.HTML에서<body>요소는 <html>요소의 자식이며, <html>요소는 <body>요소의 부모이다.<head>요소는 <body>요소의 형제로 간주하는데, 두 요소가 같은 <html>요소를 부모로 공유하기 때문이다.각 노드에는 자식노드를 가리키는 childNodes 프로퍼티가 있는데 이 프로퍼티에는 NodeList가 저장된다.

	NodeList 객체는 배열 비슷한 객체인데, 노드를 순서 있는 목록으로 저장하여 위치 기반으로 접근 할 수있다.
	NodeList 객체는 length 프로퍼티가 있고 저장된 데이터를 대괄호 표기법을고 접근 할 수있는 유사 배열 객체다.
	NodeList 객체는 DOM 구조에대한 쿼리 결과이며, 문서가 바뀌면 NodeList 객체에도 자동으로 반영되는 '살아 있는 객체'다.

var firstChild = someNode.childNodes[0];         // 대괄호 표기법 방식
var secondChild = someNode.childNodes.item(1);   // item() 메서드 방식
var count = someNode.length;                     // 자식 노드의 개수
// '호출 당시' NodeList에 담긴 노드 숫자 => 라이브 상태 이므로 바뀔 수 있다.

// [ 노드 ]
1. Node
2. firstChild
3. lastChild
4. parentNode
5. childNodes
6. nextSibling
7. previousSibling

parentNode각 노드에는 문서 트리에서 부모를 가리키는 parentNode 프로퍼가 있다.childNodes 목록에 포함된 노드는 모두 부모가 같으므로 각각의 parentNode 프로퍼티는 같은 노드를 가리킨다.또한 childNodes 목록의 각 노드는 형제 관계다.같은 목록에 잇는 노드 사이를 previousSlibing 및 nextSlibing 프로퍼티로 이동할 수 있다.

if(someNode.nextSibling === null) {
     console.log("Last node in the parent's childNodes list.");
} else {
     console.log('First node in the parent's childNodes list.');
}

// [ 노드 확인 ]

hasChildNodes() 메서드 : 노드에 자식 노드가 있다면 true를 반환한다.
contains() 메서드 : 주어진 노드가 다른 노드의 자식이라면 true를 반환한다.
isEqualNode() 메서드 : 같은 노드라면 true를 반환한다.

// [ 노드 조작 ]

	appendChild() : childNodes 목록 마지막에 노드를 추가한다.

이 메서드를 실행하며 새로 추가한 노드, 부모 노드, childNodes 목록에 포함된 이전의 마지막 자식노드에서 모든 관계가 업데이트된다.업데이트가 완료되면 appendChild()는 새로 추가한 노드를 반환한다.

var returnedNode = someNode.appednChild(newNode);

console.log(returnedNode == newNode);   // true
console.log(someNode.lastChild == newNode);   // true

// insertBefore() : 삽입할 노드와 기준 노드 두 가지를 매개변수로 받는다.

삽입한 노드는 기준 노드의 이전 형제가 되며 이동이 끝나면 메서드는 삽입한 노드를 반환한다. 기준 노드가 null이라면 insertBefore()는 appendChild()와 똑같이 동작한다.

// 마지막 자식으로 삽입
returnedNode = someNode.insertBefore(newNode, null);
console.log(newNode == someNode.lastChild);   // true

## 첫 자식으로 삽입

returnedNode = someNode.insertBefore(newNode, someNode.firstChild);
console.log(returnedNode == newNode);   // true
console.log(newNode == someNode.firstChild);   // true

## 마지막 자식 앞에 삽입

returnedNode = someNode.insertBefore(newNode, someNode.lastChild);
cxonsole.log(newNode == someNode.childNodes[someNode.childNodes.length - 2]);

// replaceChild() : 매개 변수로 삽입할 노드(A)와 교체할 노드(B) 두개를 받아서 B를 문서 트리에서 제거해 반환하며,  B가 있던 자리에 A를 대신 삽입한다.

// 마지막 자식으로 삽입
returnedNode = someNode.insertBefore(newNode, null);
console.log(newNode == someNode.lastChild);   // true

// 첫 자식으로 삽입
returnedNode = someNode.insertBefore(newNode, someNode.firstChild);
console.log(returnedNode == newNode);   // true
console.log(newNode == someNode.firstChild);   // true

// 마지막 자식 앞에 삽입
returnedNode = someNode.insertBefore(newNode, someNode.lastChild);
cxonsole.log(newNode == someNode.childNodes[someNode.childNodes.length - 2]);

노드를 제거할 때는 removeChild() 메서드를 사용한다.

// 첫 번째 자식을 제거
var formerFirstChild = someNode.removeChild(someNode.firstChild);

// 두 번째 자식을 제거
var formerLastChild = someNode.removeChild(someNode.lastChild);

```

## Promise

> 자바스크립트는 싱글 스레드에서 발생할 수 있는 문제점이 있어서
 기본 적으로 비동적으로 처리 합니다.
 즉 특정 작업들은 해당 작업이 완료되기를 기다리지 않고
 바로 다음 코드를 수행해 버리는 자바스크립트의 특성’을 의미합니다.
 싱글인데, 동기식으로 작업을 하지 않고
 시간이 걸릴 만 한 것은 알아서 비동적으로 처리하는 것을 말함...

>setTimeout 같은 경우가 대표적임
 해당 시간을 기다리지 않고 다음 으로 제어권을 넘겨 버림. 이에
 콜백 함수 로 이런 문제점을 처리하게 되는 데 대표적인 것이 promise 입니다.
 프로미스는 어떤 결과가 나온 후에 다음 작업을 진행하는 데 사용됩니다.
 즉, 비동 처리 문제점 : 결과가 나오지 않았는데, 다음으로 진행하는 것을
 원만하게 처리해 줌...

## [(YouTube Ref) Modern JavaScript From The Beginning, Traversy Media](https://youtu.be/BI1o2H9z9fo?si=D2QlyCyVjzxmW9mA)

## SandBox Git Clone

`git clone git@github.com:bradtraversy/javascript-sandbox.git`
