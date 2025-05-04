const Game = require('../models/Game');

const gamesController = {
    async readAll(req, res) {
        try {
        const games = await Game.find();
        res.status(200).json(games);
        } catch (error) {
        res.status(500).json({ message: 'Erro ao receber os jogos', error });
        }
    }
}

module.exports = gamesController;