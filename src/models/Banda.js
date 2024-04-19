const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bandaSchema = new Schema(
    {
        nome: { type: String, required: true },
        genero_musical: { type: String, required: true },
        integrantes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Musico" }],
        descricao: { type: String },
        links_musicais: [{ type: String }],
        foto: { type: String },
        localizacao: { type: String },
    },
    { timestamps: true }
);

const Banda = mongoose.model("Banda", bandaSchema);

module.exports = Banda;
