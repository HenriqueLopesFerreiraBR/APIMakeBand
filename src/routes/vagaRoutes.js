const express = require('express');
const router = express.Router();
const vagaController = require('../controllers/vagaController');

router.post('/criar', vagaController.criarVaga);
router.get('/:id', vagaController.buscarVagaPorId);
router.put('/:id', vagaController.atualizarVaga);
router.delete('/:id', vagaController.deletarVaga);

module.exports = router;
