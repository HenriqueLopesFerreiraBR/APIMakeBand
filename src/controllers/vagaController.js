const { check, validationResult } = require('express-validator');
const VagaService = require('../services/vagaService');

class VagaController {

  async criarVaga(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const vagaData = req.body;
    try {
      const vaga = await VagaService.criarVaga(vagaData);
      res.status(201).json({ message: 'Vaga criada com sucesso', vaga });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async buscarVagaPorId(req, res) {
    const id = req.params.id;
    try {
      const vaga = await VagaService.buscarVagaPorId(id);
      if (!vaga) {
        return res.status(404).json({ error: 'Vaga não encontrada' });
      }
      res.status(200).json(vaga);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async listarVagas(req, res) {
    try {
      const vagas = await VagaService.listarVagas();
      if (!vagas) {
        return res.status(404).json({ error: 'Vaga não encontrada' });
      }
      res.status(200).json(vagas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async atualizarVaga(req, res) {
    const id = req.params.id;
    const vagaData = req.body;
    try {
      await VagaService.atualizarVaga(id, vagaData);
      res.status(200).json({ message: 'Vaga atualizada com sucesso' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deletarVaga(req, res) {
    const id = req.params.id;
    try {
      await VagaService.deletarVaga(id);
      res.status(200).json({ message: 'Vaga deletada com sucesso' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new VagaController();
