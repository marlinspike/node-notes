const fs = require('fs'); //FileSystem
const _=require('lodash');

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };
    
    //Load current notes
    notes = fetchNotesFromFile();

    var duplicateNotes = notes.filter((note) => note.title === title);
    //Push new note & Save
    if(duplicateNotes.length === 0) {
        notes.push(note); notes.push("\n");
        saveNoteToFile(notes);
        return note;
    }
    else {
        console.log("Sorry, Note title already in use.");
    }
};

//Saves notes JSON array to file
var saveNoteToFile = (notes) => {
    fs.writeFileSync('notes_data.json', JSON.stringify(notes));
};

//Fetches notes from file
var fetchNotesFromFile = () => {
      try{
        var all_notes = fs.readFileSync('notes_data.json');
        notes = JSON.parse(all_notes);
        return notes;
    } catch (e) {
        return [];
    }  
};


var getAll = () => {
    console.log("Getting All Notes... ");
};

var readNote = (noteId) => {
    console.log("Reading note # ", noteId)
};

//Delete note by title
var deleteNote = (noteTitle) => {
    var notes = fetchNotesFromFile();
    filteredNotes = notes.filter((note) => note.title !== noteTitle);
    saveNoteToFile(filteredNotes);
    return notes.length !== filteredNotes.length;
};

module.exports = {
    addNote,
    getAll,
    readNote,
    deleteNote
}