const { Schema, model } = require("mongoose");

const PlaylistSchema = new Schema({

    name: String,
    description: String,
    user_id: String,
    public: False,
    collaberative: Boolean,

    song: {
        type: String,
        enum: ["The Unforgettables", "Contemporary Classics", "New Era Drinks"],  // CHECK API TO SEE HOW TO CREATE THIS MODEL// ℹ️  // ❗
        default: "The Unforgettables"
    },

    CoverImage: String, // ℹ️ // ❗
    tags: [String],
    feedback: [
        {
            user: {
                ref: 'User',
                type: Schema.Types.ObjectId // ❗
            },

        }

    ],

});

const PlayList = model("PlayList", PlaylistSchema);

module.exports = PlayList;