const express = require('express');
const router = express.Router();
const instrumentoController = require('../controllers/instrumentoController');

router.post('/criar', instrumentoController.criarInstrumento);
router.get('/', instrumentoController.buscarInstrumentos);
router.get('/:id', instrumentoController.buscarInstrumentoPorId);
router.put('/:id', instrumentoController.atualizarInstrumento);
router.delete('/:id', instrumentoController.deletarInstrumento);

module.exports = router;
