const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

router.post('/api/register', async (req, res) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.status(400).json({ message: 'Preencha todos os campos' });
    }

    // Lógica de registro, por exemplo, inserindo no banco de dados.
    try {
        // Exemplo de inserção no MongoDB
        const newUser = { username, password };
        await db.collection('users').insertOne(newUser);
        res.status(201).json({ message: 'Usuário registrado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao registrar usuário' });
    }
});

module.exports = router;

// Rota de registro
router.post('/register', register);

// Rota de login
router.post('/login', login);

module.exports = router;
