// Array.prototype.map()
// The map() method creates a new array populated with the results of calling a provied function on every element in the callin array.

// 기존 배열에서 새로운 배열을 만듦
const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const newArr = numbers.map(x => x * 2);
console.log(newArr);

// 접두사
const preFixArr = numbers.map(x => `number = ${x}`);
console.log(preFixArr);

// Same with forEach
const dblNumbers = [];
numbers.forEach(x => dblNumbers.push(x * 5));

console.log(dblNumbers);

// Companies Array
const companies = [
    { name : 'Company One', category : 'Auto', start : 1981, end : 2004 },
    { name : 'Company Two', category : 'Retail', start : 1992, end : 2008 },
    { name : 'Company Three', category : 'Auto', start : 1999, end : 2007 },
    { name : 'Company Four', category : 'Retail', start : 1989, end : 2010 },
    { name : 'Company Five', category : 'Technology', start : 2009, end : 2014 },
    { name : 'Company Six', category : 'Finance', start : 1987, end : 2010 },
    { name : 'Company Seven', category : 'Auto', start : 1986, end : 1996 },
    { name : 'Company Eight', category : 'Technoloty', start : 2011, end : 2016 },
    { name : 'Company Nine', category : 'Retail', start : 1981, end : 1989 },
];

// Create new array of company names
const companyNames = companies.map(x => x.name);
console.log(companyNames);

const companyInfo = companies.map(x => {
    return {
        name : x.name,
        category : x.category
    };
});

console.log(companyInfo);

// Create an array of objects with the name and the length of each company in years
const companyYears = companies.map(x => {
    return {
        name : x.name,
        length : `${x.end - x.start} Years`
    };
});

console.log(companyYears);

// Chain map methods short version
console.clear();
const sqrt1 = numbers
                  .map(x => Math.sqrt(x))
                  .map(sqrt => sqrt * 2);
console.log(sqrt1);

// Chain map methods long version
const sqrt2 = numbers
                  .map(x => {
                      return Math.sqrt(x);
                  })
                  .map(x => {
                      return x * 2;
                  })
                  .map(x => {
                      return x * 3;
                  });

console.log(sqrt2);

console.clear();

// Chaining different methods
const even2 = numbers
                  .filter(x => x % 2 === 0)
                  .map(x => x * 2);

console.log(even2);