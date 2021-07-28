require('dotenv').config();


const router = require("express").Router();


// require spotify-web-api-node package here:
const SpotifyWebApi = require('spotify-web-api-node');
const TracksModel = require('../models/Tracks.model')
const PlaylistModel = require('../models/Playlist.model')

// setting the spotify-api goes here:
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
});

// Retrieve an access token
spotifyApi
  .clientCredentialsGrant()
  .then(data => spotifyApi.setAccessToken(data.body['access_token']))
  .catch(error => console.log('Something went wrong when retrieving an access token', error));



router.get('/new-releases', (req, res) => {
  spotifyApi
    .searchA(req.query.q)
    .then(data => {
      console.log('The received data from the API: ', data.body.artists.items);
      // res.render('artist-search-results', {artistInfo: data.body.artists.items});
      res.json({ artistInfo: data.body.artists.items });
    })
    .catch(err => console.log('The error while searching artists occurred: ', err));
})



// Hard coded response from API
router.post('/generate-playlist', (req, res) => {
  const {
    min_danceability,
    max_danceability,
    min_acousticness,
    max_acousticness,
    min_speechiness,
    max_speechiness,
    min_popularity,
    max_popularity
  } = req.body


  spotifyApi.getRecommendations({
    min_danceability,
    // max_danceability,
    // min_acousticness,
    // max_acousticness,
    // min_speechiness,
    // max_speechiness,
    // min_popularity,
    // max_popularity,
    seed_genres: ['pop'],
    //min_popularity: 50
  })
    .then(function (data) {
      let recommendations = data.body;
      res.json(recommendations);
    }, function (err) {
      console.log("Something went wrong!", err);
    });

})


router.post('/create-playlist', (req, res) => {
  const{
    playlistName,
    tracks,
  } = req.body;

let newTracks = tracks.map((track)=>{
  return {
    name:track.name,
    artists:track.artists[0].name,
    spotifyId:track.id,
    preview_url:track.preview_url,
    external_urls:track.external_urls.spotify,
  }
})

TracksModel.insertMany(newTracks)
  .then((dbTracks)=>{
    let trackIds = dbTracks.map( (track ) => {
      return track._id

    })
    PlaylistModel.create({name:playlistName, user:req.session.loggedInUser._id, tracks:trackIds})
    .then(()=>{
      res.status(200).json({})
    })
    .catch((err) => {
      res.status(500).json(err)
    })
 
  })
  .catch((err)=>{
    console.log(err)
    res.status(500).json(err)
  })
})


router.patch('/selekta/:id', (req, res) => {
  let id = req.params.id
  let {track, user} = req.body; 
})



// app.listen(3000, () => console.log('My Spotify project running on port 3000 🎧 🥁 🎸 🔊'));

module.exports = router;







