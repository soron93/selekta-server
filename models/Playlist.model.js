const { Schema, model } = require("mongoose");
require ("./Tracks.model")
require ("./User.model")

// 1. Define your schema
let PlaylistSchema = new Schema({
  name: String, // dont know how to fix this to accept just a list of genres 
  
    tracks: [{
       type: Schema.Types.ObjectId,
       ref: "Track"
    }],

    user: {
      type: Schema.Types.ObjectId, // user 
      ref: "user"
    }
  }
 
)

// 2. Define your model
let PlaylistModel = model('Playlist', PlaylistSchema)

// 3. Export your Model with 'module.exports'
module.exports = PlaylistModel