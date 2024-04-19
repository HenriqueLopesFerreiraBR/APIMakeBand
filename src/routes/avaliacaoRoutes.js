const express = require('express');
const router = express.Router();
const avaliacaoController = require('../controllers/avaliacaoController');

router.post('/criar', avaliacaoController.criarAvaliacao);
router.get('/:id', avaliacaoController.buscarAvaliacaoPorId);
router.get('/', avaliacaoController.buscarAvaliacoes);
router.put('/:id', avaliacaoController.atualizarAvaliacao);
router.delete('/:id', avaliacaoController.deletarAvaliacao);

module.exports = router;
