module.exports.getInput = (command, argv) => {
    var command = argv;


};


var addNote = (title, body) => {
    console.log("Adding note: ", title, body);
};


var getAll = () => {
    console.log("Getting All Notes... ");
};

var readNote = (noteId) => {
    console.log("Reading note # ", noteId)
};

var deleteNote = (noteId) => {
    console.log("Deleting Note # ", noteId);
};

module.exports = {
    addNote,
    getAll,
    readNote,
    deleteNote
}