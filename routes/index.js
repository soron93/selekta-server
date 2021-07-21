const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in the router");
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;