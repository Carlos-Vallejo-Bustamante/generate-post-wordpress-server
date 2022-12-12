const express = require("express");
const validateToken = require("../middleware/validateToken.middleware");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", require("./auth.routes"))
router.use("/profile", validateToken, require("./profile.routes"))

module.exports = router;
