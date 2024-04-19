const { check, validationResult } = require("express-validator");
const BandaService = require("../services/bandaServices");

class BandaController {
    // constructor() {
    //     this.bandaService =  BandaService;
    // }

    async criarBanda(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const bandaData = req.body;
        try {
            const banda = await BandaService.criarBanda(bandaData);
            res.status(201).json({
                message: "Banda criada com sucesso",
                banda,
            });
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: error.message });
        }
    }

    async buscarBandaPorId(req, res) {
        const id = req.params.id;
        try {
            const banda = await BandaService.buscarBandaPorId(id);
            if (!banda) {
                return res.status(404).json({ error: "Banda não encontrada" });
            }
            res.status(200).json(banda);
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    async buscarBandas(req, res) {
        const id = req.params.id;
        try {
            const bandas = await BandaService.buscarBandas();
            if (!bandas) {
                return res.status(404).json({ error: "Banda não encontrada" });
            }
            res.status(200).json(bandas);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    
    async atualizarBanda(req, res) {
        const id = req.params.id;
        const bandaData = req.body;
        try {
            await BandaService.atualizarBanda(id, bandaData);
            res.status(200).json({ message: "Banda atualizada com sucesso" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deletarBanda(req, res) {
        const id = req.params.id;
        try {
            await BandaService.deletarBanda(id);
            res.status(200).json({ message: "Banda deletada com sucesso" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new BandaController();
