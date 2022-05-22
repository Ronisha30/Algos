// what is a higher order function?
// a function that accepts a function as a paramater and/or return a function
// Why do we use higher order functions?
// Simplify* solutions & Make solutions Neater*
// reduce the numbe of of code to solve a problem
// use functionality that is programmed into the engine
// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];
// console.log(countDevelopers(list1)); // 1
// sort?
// we dont need to order the people
// returns an array with elements sorted in ascending order
// filter?
// return an new array with only some of the elements from the original array filtered base on a condition
// map?
// returns a new array with elements transformed from the old array
// reduce+
// sum* up all the elements in an array into a single value
// let numberList = [1,2,3,4];
// console.log(numberList.map(x => x*2));
// //[2,4,6,8]
// console.log(numberList.reduce((a,c)=>a+c))
// 10
function countDevelopers(list) {
  // your awesome code here :)
  // filter:
  //   const devList = list.filter(person => person.language === 'JavaScript' && person.continent === 'Europe');
  //   return devList.length;
  // reduce:
  return list.reduce(
    (output = 1, person) =>
      output +
      (person.language === "JavaScript" && person.continent === "Europe"),
    0
  );
}
