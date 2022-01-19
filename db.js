const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/auth").then(()=>{
    console.log("Connected to database")
})

