var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops'
var upperDinosaur = dinosaur.toUpperCase();

console.log(upperDinosaur);

var textAfter = text.replace('Velociraptor', upperDinosaur);

console.log(textAfter);

console.log(textAfter.length/2);

var partOfText = textAfter.slice(0,72);

console.log(partOfText);