const Avaliacao = require('../models/Avaliacao');

class AvaliacaoService {
  
    async criarAvaliacao(avaliacaoData) {
      const avaliacao = new Avaliacao(avaliacaoData);
      await avaliacao.save();
      return avaliacao;
    }
  
    async buscarAvaliacaoPorId(id) {
      return await Avaliacao.findById(id);
    }

    async buscarAvaliacoes() {
      return await Avaliacao.find();
    }
  
    async buscarAvaliacoesPorMusico(musicoId) {
      return await Avaliacao.find({ musico_id: musicoId });
    }
  
    async buscarAvaliacoesPorBanda(bandaId) {
      return await Avaliacao.find({ banda_id: bandaId });
    }
  }
  
  module.exports = new AvaliacaoService();
  