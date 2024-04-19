const express = require('express');
const router = express.Router();
const bandaController = require('../controllers/bandaController');

router.post('/criar', bandaController.criarBanda);
router.get('/:id', bandaController.buscarBandaPorId);
router.get('/', bandaController.buscarBandas);
router.put('/:id', bandaController.atualizarBanda);
router.delete('/:id', bandaController.deletarBanda);

module.exports = router;
