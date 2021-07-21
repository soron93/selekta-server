const router = require("express").Router();

router.get("/testsal", (req, res, next) => {
  res.json("All good in the router");
});

router.get("/testemmy", (req, res, next) => {
    res.json("All good in the router");
  });
  