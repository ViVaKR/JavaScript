const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// long version
const evenNums1 = numbers.filter(function(number) {
    return number % 2 === 0;
});

// short version
const evenNums2 = numbers.filter(x => x % 2 === 0);

// forEach version
const evenNums3 = [];
numbers.forEach(x => {
    if (x % 2 === 0)
        evenNums3.push(x);
});
console.log(evenNums1, evenNums2, evenNums3);

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

// Get only retail company
const retailCompanies = companies.filter(x => x.category === 'Retail');
console.log(retailCompanies);

// Get companies that started in or after 1980 and edned in or before 2005
const earlyCompanies = companies.filter(x => x.start >= 1980 && x.end <= 2005);
console.log(earlyCompanies);

// Get companies that lastd 10 years or mor
const tenYears = companies.filter(x => x.end - x.start >= 10);

console.log(tenYears);