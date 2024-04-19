const Instrumento = require('../models/Instrumento');

class InstrumentoService {
    // constructor() {
    //   const Instrumento = require('../models/Instrumento');
    // }
  
    async criarInstrumento(instrumentoData) {
      const instrumento = new Instrumento(instrumentoData);
      await instrumento.save();
      return instrumento;
    }
  
    async buscarInstrumentoPorId(id) {
      return await Instrumento.findById(id);
    }
  
    async atualizarInstrumento(id, instrumentoData) {
      await Instrumento.findByIdAndUpdate(id, instrumentoData);
    }
  
    async deletarInstrumento(id) {
      await Instrumento.findByIdAndDelete(id);
    }

    async buscarInstrumento() {
      return await Instrumento.find();
    }
  }
  
  module.exports = new InstrumentoService();
  