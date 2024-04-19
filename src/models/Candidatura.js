const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const candidaturaSchema = new Schema(
    {
        musico_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Musico",
            required: true,
        },
        vaga_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vaga",
            required: true,
        },
        mensagem: { type: String },
        status: {
            type: String,
            required: true,
            enum: ["pendente", "aprovada", "recusada"],
        },
    },
    { timestamps: true }
);

const Candidatura = mongoose.model("Candidatura", candidaturaSchema);

module.exports = Candidatura;
