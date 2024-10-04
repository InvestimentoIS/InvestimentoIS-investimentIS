const express = require('express');
const authRoutes = require('./auth'); // Ajuste o caminho se necessário

const router = express.Router();

// Usar as rotas de autenticação
router.use('/auth', authRoutes); // As rotas de auth serão acessíveis em /auth

module.exports = router;
