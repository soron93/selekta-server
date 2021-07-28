const express = require('express');
const router  = express.Router();
const PlaylistModel = require('../models/Playlist.model')

router.get('/profile', (req, res) => {
   let id = req.session.loggedInUser._id // on signing  session is created   can be  reused in the code like a global variables
   PlaylistModel.find({user:id})
    .populate("tracks")
      .then((playlists)=>{
        res.status(200).json(playlists)
      })
      .catch((err) => {
        res.status(500).json(err)
      })
    
})

router.get('/playlist/:id', (req, res) => {
  let id = req.params.id // on signing  session is created   can be  reused in the code like a global variables
  PlaylistModel.findById(id)
   .populate("tracks")
     .then((playlist)=>{
       res.status(200).json(playlist)
     })
     .catch((err) => {
       res.status(500).json(err)
     })
   
})

router.delete('/playlist/:id/:trackid', (req, res) => {
  let trackid = req.params.trackid
  let id = req.params.id // on signing  session is created   can be  reused in the code like a global variables
  PlaylistModel.findByIdAndUpdate(id, {
    $pull: {tracks: trackid }
  })
     .then((playlist)=>{
       res.status(200).json(playlist)
     })
     .catch((err) => {
       res.status(500).json(err)
     })
   
})

router.patch('/playlist/:id', (req, res) => {
  const {name} = req.body;
  let id = req.params.id // on signing  session is created   can be  reused in the code like a global variables
  PlaylistModel.findByIdAndUpdate(id, {name})
     .then((playlist)=>{
       res.status(200).json(playlist)
     })
     .catch((err) => {
       res.status(500).json(err)
     })
   
})

//test routes ok
module.exports = router;