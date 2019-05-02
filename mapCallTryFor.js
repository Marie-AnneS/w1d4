var words = ["ground", "control", "to", "major", "tom"];

function map(arr, cb) {
    newArr = []
    for (var word of arr){
        newArr.push(cb);
    }
    console.log(newArr);    
} 

map(words, function(word) {
    return word.length;
  });
 
/*map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
 */
