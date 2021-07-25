const { Schema, model } = require("mongoose");

// 1. Define your schema
let GenresSchema = new Schema({
  genre: String // dont know how to fix this to accept just a list of genres 

  }
 
)

// 2. Define your model
let GenresModel = model('genre', GenresSchema)

// 3. Export your Model with 'module.exports'
module.exports = GenresModel