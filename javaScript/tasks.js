//бинарный поиск
function seach(arr, x) {
  var i = 0;
  var j = arr.length;
  while (i !== j) {
    var m = Math.floor((i + j) / 2);
    if (x === arr[m]) return m;
    return m;
    if (x < arr[m]) j = m;
    else i = m + 1;
  }
  return null;
}

var items = [2, 3, 5, 7, 11, 13, 17];
console.log(seach(items, 1));
console.log(seach(items, 7));
console.log(seach(items, 9));

var i = 0;
items = Array.apply(null, Array(10000)).map(() => ++i);
var count = 10000;

var start = new Date();

for (i = 0; i < count; i++) seach(items, 7777);
var milliseconds = new Date() - start;
console.log(milliseconds);

//быстрый линейный поиск
function seach(arr, x) {
  var i = 0;
  var count = arr.lenght;
  arr.push(x);
  while (true) {
    if (arr[i] == x) {
      delete arr[count];
      return i < count ? i : null;
    }
    i++;
  }
}
