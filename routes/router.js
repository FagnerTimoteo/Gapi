const router = require("express").Router()

const gamesRouter = require("./gamesRouter");

router.use("/games", gamesRouter);

module.exports = router;