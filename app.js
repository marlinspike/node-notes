console.log('Starting app');

const fs = require ('fs');
const yargs = require('yargs');

const _=require('lodash');
const notes = require('./notes.js');

console.log("Yargs",yargs.argv);



var command = process.argv[2];
const arguments = yargs.argv;

if (command === 'add'){
    console.log("Adding...");
    notes.addNote(arguments.title, arguments.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.readNote(arguments.noteid)
} else if (command === 'delete') {
    notes.deleteNote(arguments.noteid);
} else {
    console.log("Command not recognized.");
}

//notes.getInput(yargs.argv);