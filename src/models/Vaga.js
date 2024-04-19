const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vagaSchema = new Schema({
  banda_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Banda', required: true },
  tipo: { type: String, required: true, enum: ['evento', 'integrante_definitivo'] },
  instrumento: { type: mongoose.Schema.Types.ObjectId, ref: 'Instrumento' },
  experiencia_desejada: { type: String },
  descricao: { type: String, required: true },
  data_evento: { type: Date, required: true },
  status: { type: String, required: true, enum: ['aberta', 'fechada', 'em_andamento'] },
}, { timestamps: true });

const Vaga = mongoose.model('Vaga', vagaSchema);

module.exports = Vaga;
