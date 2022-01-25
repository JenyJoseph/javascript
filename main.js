const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const sortAges = ages.sort(function(a, b) {
    return a - b;
});

const sortAgesDesc = ages.sort(function(a, b) {
    return b - a;
});

console.log(sortAgesDesc);

console.log(sortAges);

const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}

companies.forEach(function(company) {
    console.log(company.name);
});

// for(let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// forEach

// companies.forEach(function(company) {
//   console.log(company.name);
// });

let canDrink1 = [];
let cannotDrink1 = [];
for (i = 0; i < ages.length; i++) {
    if (ages[i] > 21) {
        canDrink1.push(ages[i]);
        console.log(canDrink1);
    } else {
        cannotDrink1.push(ages[i]);
    }
    console.log("Can drink ages: " + canDrink1);
    console.log("Cannot drink ages: " + cannotDrink1);
}

const canDrink3 = ages.filter((age) => age >= 21);
console.log(canDrink3);

const technolgies = companies.filter(
    (company) => company.category === "Technology"
);
console.log(technolgies);

const startDate = companies.filter((ccc) => ccc.start === 1981);
console.log(startDate);

const eightiesCompanies1 = companies.filter((company) => company.start < 1990);
console.log(eightiesCompanies1);

const lastedTenYears1 = companies.filter(
    (company) => company.end - company.start >= 10
);
console.log(lastedTenYears1);

const companyNames = companies.map(
    (company) => `${company.name} ${company.category}`
);

console.log(companyNames);

// filter

// Get 21 and older

// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//   if(ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink = ages.filter(function(age) {
//   if(age >= 21) {
//     return true;
//   }
// });

const canDrink = ages.filter((age) => age >= 21);

// Filter retail companies

// const retailCompanies = companies.filter(function(company) {
//   if(company.category === 'Retail') {
//     return true;
//   }
// });

const retailCompanies = companies.filter(
    (company) => company.category === "Retail"
);

// Get 80s companies

const eightiesCompanies = companies.filter(
    (company) => company.start >= 1980 && company.start < 1990
);

// Get companies that lasted 10 years or more

const lastedTenYears = companies.filter(
    (company) => company.end - company.start >= 10
);

const ageTwoTimes = ages.map((ages) => ages * 2);
console.log(ageTwoTimes);
console.log(ages);
// map

// Create array of company names
// const companyNames = companies.map(function(company) {
//   return company.name;
// });

// const testMap = companies.map(function(company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

// const ageMap = ages
//   .map(age => Math.sqrt(age))
//   .map(age => age * 2);

// sort

// Sort companies by start year

// const sortedCompanies  = companies.sort(function(c1, c2) {
//   if(c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// Sort ages
// const sortAges = ages.sort((a, b) => a - b);

// console.log(sortAges);

// reduce

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);

// const ageSum = ages.reduce((total, age) => total + age, 0);

// Get total years for all companies

// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start);
// }, 0);

const totalYears = companies.reduce(
    (total, company) => total + (company.end - company.start),
    0
);

const TotalYear1 = companies.reduce(
    (total, company) => total + (company.end - company.start),
    0
);
console.log(TotalYear1);

// Combine Methods

const combined = ages
    .map((age) => age * 2)
    .filter((age) => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);

console.log(combined);
const ages1 = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const combined1 = ages1
    .map((age) => age * 2)
    .filter((age) => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);

console.log(combined1);