console.log('Starting app');

const fs = require ('fs');
const yargs = require('yargs');

const _=require('lodash');
const notes = require('./notes.js');

//console.log("Yargs",yargs.argv);


const arguments = yargs.argv;
var command = arguments._[0];

console.log("Command - " + command)

if (command === 'add'){
    //console.log("Adding...");
    var newNote = notes.addNote(arguments.title, arguments.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.readNote(arguments.noteid)
} else if (command === 'delete') {
    var isDeleted = notes.deleteNote(arguments.title);
    var message = isDeleted ? "Note deleted" : "Title not found";
    console.log(message);
} else {
    console.log("Command not recognized.");
}

//notes.getInput(yargs.argv);