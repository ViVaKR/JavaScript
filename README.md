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
- ES5 : ECMAScript 2009, The First Main Revision
- ES6 : ECMAScript 2015, The Second Revision
- ECMAScript 2016
- ECMAScript 2017
- ECMAScript 2017
- ECMAScript 2018
- ECMAScript 2019
- ECMAScript 2020

## DOM Node Types

1. Element
2. Arrt
3. Text
4. CDATASection
5. EntityReference
6. Entity
7. ProcessingInstruction
8. Commnet
9. Document
10. DocumentType
11. DocumentFragment
12. Notation

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
