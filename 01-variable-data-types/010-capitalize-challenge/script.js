const myString = 'developer';

let myNewString;

// Solution 1:
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

// Solution 2:
myNewString = myString[0].toUpperCase() + myString.slice(1);

// Solution 3:
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

console.log(myNewString);

/* 
? [ 솔루션 ] ?

"어떤 특정한 상황에 대한 해결책으로 사용자의 요구에 따라 프로그램과 관련된 문제들을 처리해주는 하드웨어, 소프트웨어, 기술 등을 가리킨다. 
솔루션은 사용자가 하드웨어, 소프트웨어, 서비스, 응용프로그램, 파일형식, 회사, 상표명, 운영체제 등을 일일이 구분하지 않고 원하는 해결책을 구입할 때 사용되는 용어이다. 
따라서 보통 솔루션에 관한 요구는 수량이 많고 여러 가지 작업 및 다양한 제작자의 제품들이 함께 관련되어 있는 경우에 필요하다."

"사용자 요구에 적합하면서 특정한 형태의 컴퓨터 소프트웨어 패키지나 응용프로그램과 연계된 문제를 처리해 주는 하드웨어 또는 소프트웨어를 의미한다. 
솔루션은 사용자가 하드웨어, 소프트웨어, 서비스, 응용프로그램, 파일형식, 회사, 상표명, 운영체계 등을 일일이 구별해야 하는 어려움을 겪지 않고 원하는 작업을 가능하게 해준다."

*/
