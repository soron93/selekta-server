const { Schema, model } = require("mongoose");

const TrackSchema = new Schema({

    name: String,

    artists:String  ,//

    spotifyId: String,

    preview_url: String,

    external_urls: String

    //grab img url later 

});

const Track = model("Track", TrackSchema);

module.exports = Track;