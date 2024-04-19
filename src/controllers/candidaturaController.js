const { check, validationResult } = require('express-validator');
const CandidaturaService = require('../services/candidaturaService');

class CandidaturaController {


  async criarCandidatura(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const candidaturaData = req.body;
    try {
      const candidatura = await CandidaturaService.criarCandidatura(candidaturaData);
      res.status(201).json({ message: 'Candidatura criada com sucesso', candidatura });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async buscarCandidaturaPorId(req, res) {
    const id = req.params.id;
    try {
      const candidatura = await CandidaturaService.buscarCandidaturaPorId(id);
      if (!candidatura) {
        return res.status(404).json({ error: 'Candidatura não encontrada' });
      }
      res.status(200).json(candidatura);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async listarCandidaturas(req, res) {
    const id = req.params.id;
    try {
      const candidaturas = await CandidaturaService.listarCandidaturas();
      if (!candidaturas) {
        return res.status(404).json({ error: 'Candidatura não encontrada' });
      }
      res.status(200).json(candidaturas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async atualizarCandidatura(req, res) {
    const id = req.params.id;
    const candidaturaData = req.body;
    try {
      await CandidaturaService.atualizarCandidatura(id, candidaturaData);
      res.status(200).json({ message: 'Candidatura atualizada com sucesso' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deletarCandidatura(req, res) {
    const id = req.params.id;
    try {
      await CandidaturaService.deletarCandidatura(id);
      res.status(200).json({ message: 'Candidatura deletada com sucesso' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new CandidaturaController();
