const express = require('express');
const router  = express.Router();

// include CLOUDINARY:
const uploader = require('../middlewares/cloudinary.config.js');

// ensure you have an input type like this in your hbs file
/*
<form method="POST" action="/upload" enctype="multipart/form-data">
    <input type="file" name="imageUrl" accept="image/png, image/jpg">
    <button type="submit">Submit</button> 
</form>     
*/

// imageUrl is the input name in your hbs file


router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {
     console.log('file is: ', req.file)
    if (!req.file) {
      next(new Error('No file uploaded!'));
      return;
    }
    //You will get the image url in 'req.file.path'
    //store that in the DB 
    res.status(200).json({
        image: req.file.path
    }) 
})

module.exports = router;

