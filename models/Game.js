const mongoose = require("mongoose");
const { Schema } = mongoose;

const gameSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    dataLancamento: {
        type: Date,
        required: true
    },
    plataforma: {
        type: String,
        required: true
    },
    desenvolvedora: {
        type: String,
        required: true
    },
    publicadora: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Game", gameSchema);