const mongoose = require('mongoose');
const DB = "mongodb+srv://denismwai898:iamblessed@cluster0.lrfu8nl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(DB, { 
}).then(
    () => {
    console.log("Connection successful");
}).catch((e) => {
    console.error(e);
});

module.exports = mongoose; // Export the mongoose object itself
