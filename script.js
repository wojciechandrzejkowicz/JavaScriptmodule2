var text = 'Velociraptor is a genus of herbivorous';
var dinosaur = 'triceratops';
var upperDinosaur = dinosaur.toUpperCase();
var textArray = text.split(' ');
var textAfter = text.replace(textArray[0], upperDinosaur);
var partOfText = textAfter.slice(0, textAfter.length/2);

console.log(partOfText);