/*var obj = {
    name: 'Reuben'
};

var personString = '{"name": "Reuben Cleetus", "age": 40}';

var stringObj = JSON.stringify(obj);
stringObj = JSON.parse(personString);

console.log(typeof stringObj)
console.log(stringObj)*/

const fs = require('fs');
var originalNote = {
    title: 'Some  title',
    body: 'Some  body'
};

var str = JSON.stringify(originalNote);
console.log(str);
fs.writeFileSync('notesdb.json', str);

var noteFromFile = fs.readFileSync('notesdb.json');
originalNote = JSON.parse(noteFromFile);
console.log(originalNote.title);