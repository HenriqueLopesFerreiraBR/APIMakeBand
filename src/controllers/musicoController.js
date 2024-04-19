const { check, validationResult } = require('express-validator');
const MusicoService = require('../services/musicoService');

class MusicoController {
  // constructor() {
  //   this.musicoService = MusicoService;
  // }

  async criarMusico(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const musicoData = req.body;
    try {
      // Validação de email único
      const existente = await MusicoService.buscarMusicoPorEmail(musicoData.email);
      if (existente) {
        return res.status(409).json({ error: 'Email já cadastrado' });
      }

      const musico = await MusicoService.criarMusico(musicoData);
      res.status(201).json({ message: 'Músico criado com sucesso', musico });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async buscarMusicoPorId(req, res) {
    const id = req.params.id;
    try {
      const musico = await MusicoService.buscarMusicoPorId(id);
      if (!musico) {
        return res.status(404).json({ error: 'Músico não encontrado' });
      }
      res.status(200).json(musico);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async buscarMusicos(req, res) {
    const id = req.params.id;
    try {
      const musico = await MusicoService.buscarMusicos();
      if (!musico) {
        return res.status(404).json({ error: 'Músico não encontrado' });
      }
      res.status(200).json(musico);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async atualizarMusico(req, res) {
    const id = req.params.id;
    const musicoData = req.body;
    try {
      await MusicoService.atualizarMusico(id, musicoData);
      res.status(200).json({ message: 'Músico atualizado com sucesso' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deletarMusico(req, res) {
    const id = req.params.id;
    try {
      await MusicoService.deletarMusico(id);
      res.status(200).json({ message: 'Músico deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new MusicoController();
