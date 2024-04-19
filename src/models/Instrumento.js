const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const instrumentoSchema = new Schema(
    {
        nome: { type: String, required: true },
        descricao: { type: String }
    },
    { timestamps: true }
);

const Instrumento = mongoose.model("Instrumento", instrumentoSchema);

module.exports = Instrumento;
