const Game = require('../models/Game');

const gamesController = {
    async readAll(req, res) {
        try {
            const games = await Game.find();
            res.status(200).json(games);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao receber os jogos', error });
        }
    },

    async create(req, res) {
        try {
            const game = {
                titulo: req.body.titulo,
                genero: req.body.genero,
                dataLancamento: req.body.dataLancamento,
                plataforma: req.body.plataforma,
                desenvolvedora: req.body.desenvolvedora,
                publicadora: req.body.email
            };

            const response = await Game.create(game);

            res.status(201).json({response, msg: "Jogo cadastrado com sucesso!"});
        } catch (error) {
            res.status(500).json({ message: 'Algo deu errado', error });
        }
    }
}

module.exports = gamesController;