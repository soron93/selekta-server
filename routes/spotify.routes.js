require('dotenv').config();


const router = require("express").Router();


// require spotify-web-api-node package here:
const SpotifyWebApi = require('spotify-web-api-node');


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



router.get('/artist-search', (req, res) => {
  spotifyApi
    .searchArtists(req.query.q)
    .then(data => {
      console.log('The received data from the API: ', data.body.artists.items);
      // res.render('artist-search-results', {artistInfo: data.body.artists.items});
      res.json({ artistInfo: data.body.artists.items });
    })
    .catch(err => console.log('The error while searching artists occurred: ', err));
})

router.get('/albums/:artistId', (req, res, next) => {
  spotifyApi
    .getArtistAlbums(req.params.artistId)
    .then(data => {
      console.log('The received data from the API: ', data.body.items);
      // res.render('albums', {albumInfo: data.body.items});
      res.json({ albumInfo: data.body.items });
    })
    .catch(err => console.log('The error while searching albums occurred: ', err));
});

router.get('/tracks/:albumId', (req, res, next) => {
  spotifyApi
    .getAlbumTracks(req.params.albumId)
    .then(data => {
      console.log('The received data from the API: ', data.body.items);
      //res.render('tracks', {trackList: data.body.items});
      res.json({ trackList: data.body.items })
    })
    .catch(err => console.log('The error while searching albums occurred: ', err));
});

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
// app.listen(3000, () => console.log('My Spotify project running on port 3000 🎧 🥁 🎸 🔊'));

module.exports = router;