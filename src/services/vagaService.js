const Vaga = require("../models/Vaga");

class VagaService {
    async criarVaga(vagaData) {
        const vaga = new Vaga(vagaData);
        await vaga.save();
        return vaga;
    }

    async buscarVagaPorId(id) {
        return await Vaga.findById(id);
    }

    async listarVagas() {
        return await Vaga.find();
    }

    async atualizarVaga(id, vagaData) {
        await Vaga.findByIdAndUpdate(id, vagaData);
    }

    async deletarVaga(id) {
        await Vaga.findByIdAndDelete(id);
    }
}

module.exports = new VagaService();
