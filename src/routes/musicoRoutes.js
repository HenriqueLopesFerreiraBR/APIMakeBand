const express = require('express');
const router = express.Router();
const musicoController = require('../controllers/musicoController');

router.post('/criar', musicoController.criarMusico);
router.get('/:id', musicoController.buscarMusicoPorId);
router.get('/', musicoController.buscarMusicos);
router.put('/:id', musicoController.atualizarMusico);
router.delete('/:id', musicoController.deletarMusico);

module.exports = router;
