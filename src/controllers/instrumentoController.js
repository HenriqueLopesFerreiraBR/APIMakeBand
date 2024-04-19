const { check, validationResult } = require('express-validator');
const InstrumentoService = require('../services/InstrumentoService');
const Instrumento = require('../models/Instrumento');

class InstrumentoController {
  //  constructor() {
  //    this.InstrumentoService = new InstrumentoService();
  //  }

  async criarInstrumento(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const instrumentoData = req.body;
    try {
      const instrumento = await InstrumentoService.criarInstrumento(instrumentoData);
      res.status(201).json({ message: 'Instrumento criado com sucesso', instrumento });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async buscarInstrumentoPorId(req, res) {
    const id = req.params.id;
    try {
      const instrumento = await InstrumentoService.buscarInstrumentoPorId(id);
      if (!instrumento) {
        return res.status(404).json({ error: 'Instrumento não encontrado' });
      }
      res.status(200).json(instrumento);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async buscarInstrumentos(req, res) {
    const id = req.params.id;
    try {
      const instrumento = await InstrumentoService.buscarInstrumento();
      if (!instrumento) {
        return res.status(404).json({ error: 'Nenhum instrumento foi encontrado' });
      }
      res.status(200).json(instrumento);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async atualizarInstrumento(req, res) {
    const id = req.params.id;
    const instrumentoData = req.body;
    try {
      await InstrumentoService.atualizarInstrumento(id, instrumentoData);
      res.status(200).json({ message: 'Instrumento atualizado com sucesso' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deletarInstrumento(req, res) {
    const id = req.params.id;
    try {
      await InstrumentoService.deletarInstrumento(id);
      res.status(200).json({ message: 'Instrumento deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new InstrumentoController();
