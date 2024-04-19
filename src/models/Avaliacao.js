const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const avaliacaoSchema = new Schema(
    {
        musico_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Musico",
            required: true,
        },
        banda_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Banda",
            required: true,
        },
        pontuacao: { type: Number, required: true, min: 1, max: 5 },
        comentario: { type: String },
    },
    { timestamps: true }
);

const Avaliacao = mongoose.model("Avaliacao", avaliacaoSchema);

module.exports = Avaliacao;
