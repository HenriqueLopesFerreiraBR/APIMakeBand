const { check, validationResult } = require("express-validator");
const AvaliacaoService = require("../services/avaliacaoService");

class AvaliacaoController {
    constructor() {
        this.avaliacaoService = AvaliacaoService;
    }

    async criarAvaliacao(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const avaliacaoData = req.body;
        try {
            const avaliacao = await AvaliacaoService.criarAvaliacao(
                avaliacaoData
            );
            res.status(201).json({
                message: "Avaliação criada com sucesso",
                avaliacao,
            });
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: error.message });
        }
    }

    async buscarAvaliacaoPorId(req, res) {
        const id = req.params.id;
        try {
            const avaliacao = await AvaliacaoService.buscarAvaliacaoPorId(
                id
            );
            if (!avaliacao) {
                return res
                    .status(404)
                    .json({ error: "Avaliação não encontrada" });
            }
            res.status(200).json(avaliacao);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async buscarAvaliacoes(req, res) {
 
        try {
            const avaliacoes = await AvaliacaoService.buscarAvaliacoes();
            if (!avaliacoes) {
                return res
                    .status(404)
                    .json({ error: "Avaliações não encontradas" });
            }
            res.status(200).json(avaliacoes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async atualizarAvaliacao(req, res) {
        const id = req.params.id;
        const avaliacaoData = req.body;
        try {
            await AvaliacaoService.atualizarAvaliacao(id, avaliacaoData);
            res.status(200).json({
                message: "Avaliação atualizada com sucesso",
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deletarAvaliacao(req, res) {
        const id = req.params.id;
        try {
            await AvaliacaoService.deletarAvaliacao(id);
            res.status(200).json({ message: "Avaliação deletada com sucesso" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new AvaliacaoController();
