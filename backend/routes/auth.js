const express = require('express');
const { register, login } = require('./controllers/authController');
const router = express.Router();
const User = require('../models/User'); // Mantenha esse caminho
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Registro de novo usuário
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Verifica se o email já existe
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email já cadastrado." });

    // Criptografa a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Cria o novo usuário
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Usuário registrado com sucesso." });
  } catch (error) {
    res.status(500).json({ message: "Erro ao registrar usuário.", error });
  }
};

// Login de usuário
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Usuário não encontrado." });

    // Verifica a senha
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ message: "Senha incorreta." });

    // Gera token JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: "Login bem-sucedido", token });
  } catch (error) {
    res.status(500).json({ message: "Erro ao fazer login.", error });
  }
};

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
