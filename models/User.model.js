const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true
  },
  
  password: String,

  username: {
    type: String,
    require: true,
  }, 

  userID: { //The user’s Spotify user ID,  do we need to have this in the user model?  sign in with spotify
    type: String,
    require: true,
  }, 

  userPlayList: [{type: Schema.Types.ObjectId, ref: 'PlayList'}]
});

const User = model("User", userSchema);

module.exports = User;