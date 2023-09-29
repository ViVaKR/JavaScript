// Function Declaration
// 함수 선언문의 호이스팅으로 위에서 호출하여도 정상 작동함
console.log(addDollarSign(100));
function addDollarSign(value) {
  return '$' + value;
}

// Function Expression
// console.log(addPlusSign(200)); // error : 함수 표현식은 그렇지 않음
var addPlusSign = function (value) {
  return '\u20A9' + value; // 원화 유니코드
};
console.log(addPlusSign(200)); // 함수 표현식

// 호이스팅 : 자바스크립트 함수는 실행되기 전에 함수 안에 필요한 변수값들을
// 유효 범위의 최 상당에 선언한다.
// var 변수 선언과 함수 선언문에서만 호이스팅이 일어난다.
// var : 함수의 선언만 위로 끌어 올려지고, 할당은 끌어 올려지지 않는다.
// let/const : 변수 선언과 함수 표현식에서는 호이스팅이 발생하지 않는다.

/*  (1)
    console.log("Hello World");
    var myName = "Viv";
    let myName2 = "Kr";

    function foo() { // 함수 선언문, Declaration
        // TODO
    }

    var bar = function() { // 함수 표현식, Expression
        // TODO
    }
*/

/* (2) Hosting
    bar(); // Hosting : 함수 표현식의 변수값 선언

    var myName; // Hosting 선언
    console.log("Hello World")
    myName = "Viv"; // 할당
    let myName2 = "Kr"; // Hosting 발생하지 않음

    function foo() { // 함수 선언문, Declaration
        // TODO
    }

    var bar = function() { // 함수 표현식, Expression
        // TODO
    }

    - 함수 선언문은 코드 구현 위치와 무관하게 호이스팅되어 맨위로 끝러 올려 짐
*/

// 함수 선언 문 호이스팅 테스트
function sayName(fullName) {
  var result = innerFunc();
  console.log(typeof innerFunc);
  console.log(`${result}, ${fullName} World`);

  function innerFunc() {
    return 'Hello';
  }
}
sayName('Viv');
