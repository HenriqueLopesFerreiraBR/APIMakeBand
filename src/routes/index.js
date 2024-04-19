const express = require('express');
const musicoRouter = require('./musicoRoutes');
const bandaRouter = require('./bandaRoutes');
const instrumentoRouter = require('./instrumentoRoutes');
const vagaRouter = require('./vagaRoutes');
const candidaturaRouter = require('./candidaturaRoutes');
const avaliacaoRouter = require('./avaliacaoRoutes');

const router = express.Router();

router.use('/musicos', musicoRouter);
router.use('/bandas', bandaRouter);
router.use('/instrumentos', instrumentoRouter);
router.use('/vagas', vagaRouter);
router.use('/candidaturas', candidaturaRouter);
router.use('/avaliacoes', avaliacaoRouter);

module.exports = router;
