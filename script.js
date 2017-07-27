var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var arr = femaleNames.concat(maleNames);

console.log(arr);

var newName = 'Marian';

if (arr.indexOf(newName) > -1) {
    console.log('imie w tablicy');
} else {
    console.log('brak imienia');
    var x = arr.push(newName);
}
console.log(x);