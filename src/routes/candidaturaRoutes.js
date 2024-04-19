const express = require('express');
const router = express.Router();
const candidaturaController = require('../controllers/candidaturaController');

router.post('/criar', candidaturaController.criarCandidatura);
router.get('/:id', candidaturaController.buscarCandidaturaPorId);
router.get('/', candidaturaController.listarCandidaturas);
router.put('/:id', candidaturaController.atualizarCandidatura);
router.delete('/:id', candidaturaController.deletarCandidatura);

module.exports = router;
