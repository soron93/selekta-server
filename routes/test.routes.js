const express = require('express');
const router  = express.Router();


router.get("/shade", (req, res, next) => {
  res.status(200).json(response);
});

router.get("/testemmy", (req, res, next) => {
    res.json("All good in the router");
  });
  

  module.exports = router;