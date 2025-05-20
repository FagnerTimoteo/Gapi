const mongoose = require("mongoose");

async function main() {
    try {
        mongoose.set("strictQuery", true);

        // Usa MONGO_URL do ambiente ou default para localhost
        const mongoUrl = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/games';

        await mongoose.connect(mongoUrl);
        console.log("conectado ao mongodb");
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

module.exports = main;
