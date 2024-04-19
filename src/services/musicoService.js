const Musico = require('../models/Musico');

class MusicoService {

  
    async criarMusico(musicoData) {
      const musico = new Musico(musicoData);
      await musico.save();
      return musico;
    }
  
    async buscarMusicoPorId(id) {
      return await Musico.findById(id);
    }

    async buscarMusicos() {
      return await Musico.find();
    }

    async buscarMusicoPorEmail(email) {
      return await Musico.findOne({email:email});
    }
  
    async atualizarMusico(id, musicoData) {
      await Musico.findByIdAndUpdate(id, musicoData);
    }
  
    async deletarMusico(id) {
      await Musico.findByIdAndDelete(id);
    }
  }
  
  module.exports = new MusicoService();
  