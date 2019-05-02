function map(someArray, someFunction) {

  var newArray = [];

  for (i = 0; i < someArray.length; i++) {

    newArray[i] = someFunction(someArray[i])

  }

  console.log(newArray);

}

var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});