const router = require('express').Router();
const gamesController = require('../controllers/gamesController');

router.get('/', async (req, res) => { gamesController.readAll(req, res) });

module.exports = router;