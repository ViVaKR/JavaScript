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

## Start

1. Install Web Browser

## [Test Site](supersimple.dev/js-basics)

## [BootCamp](bootcamp.js)

## Syntax (구문)

- 프로그래밍 준수 규칙
- 문법 (grammar)

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

## The Call Stack

- Stack of functions to be executed
- Manages execution contexts
- Stacks are LIFO last in first out

---

`-----------------`  
third()  
`-----------------`  
second()  
`-----------------`  
first()  
`-----------------`  
Global EC  
`-----------------`  
CALL STACK  
`-----------------`  

---

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

## [(YouTube Ref) Modern JavaScript From The Beginning, Traversy Media](https://youtu.be/BI1o2H9z9fo?si=D2QlyCyVjzxmW9mA)
