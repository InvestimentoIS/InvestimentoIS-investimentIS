const express = require('express');
const router = express.Router();
const authRoutes = require('./auth');

router.use('/auth', authRoutes); // Define a rota base para autenticação

module.exports = router;
