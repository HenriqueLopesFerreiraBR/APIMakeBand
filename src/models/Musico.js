const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const musicoSchema = new Schema(
    {
        nome: { type: String, required: true },
        nome_artistico: { type: String },
        email: { type: String, required: true, unique: true },
        senha: { type: String, required: true },
        instrumentos: [
            { type: mongoose.Schema.Types.ObjectId, ref: "Instrumento" },
        ],
        estilos_musicais: [{ type: String }],
        experiencia: { type: String },
        links_musicais: [{ type: String }],
        foto: { type: String },
        localizacao: { type: String },
    },
    { timestamps: true }
);

const Musico = mongoose.model("Musico", musicoSchema);

module.exports = Musico;
