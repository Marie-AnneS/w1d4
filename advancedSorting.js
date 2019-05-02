var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function compareName(a, b){
  // return a.name - b.name;
  var x = a.name;
  var y = b.name;
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
};

function compareAge(a, b){

  return b.age - a.age

};

let sortedByAge = students.sort(compareAge)
let sortedByName = students.sort(compareName)

console.log(students);
/*
console.log(students.sort(compareAge).sort(compareName));
*/