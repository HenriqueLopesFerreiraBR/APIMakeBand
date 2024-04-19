const Candidatura = require("../models/Candidatura");
class CandidaturaService {
    async criarCandidatura(candidaturaData) {
        const candidatura = new Candidatura(candidaturaData);
        await candidatura.save();
        return candidatura;
    }

    async buscarCandidaturaPorId(id) {
        return await Candidatura.findById(id);
    }
    async listarCandidaturas() {
        return await Candidatura.find();
    }

    async atualizarCandidatura(id, candidaturaData) {
        await Candidatura.findByIdAndUpdate(id, candidaturaData);
    }

    async deletarCandidatura(id) {
        await Candidatura.findByIdAndDelete(id);
    }
}

module.exports = new CandidaturaService();
