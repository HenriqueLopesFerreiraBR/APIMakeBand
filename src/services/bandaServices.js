const Banda = require("../models/Banda");

class BandaService {
    async criarBanda(bandaData) {
        const banda = new Banda(bandaData);
        await banda.save();
        return banda;
    }

    async buscarBandaPorId(id) {
        return await Banda.findById(id);
    }

    async buscarBandas() {
        return await Banda.find();
    }

    async atualizarBanda(id, bandaData) {
        await Banda.findByIdAndUpdate(id, bandaData);
    }

    async deletarBanda(id) {
        await Banda.findByIdAndDelete(id);
    }
}

module.exports = new BandaService();
