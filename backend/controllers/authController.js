const User = require('../models/User');
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
const User = require('../models/User'); // Model do usuário

// Função para registrar um usuário
const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Verificar se o usuário já existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Usuário já existe' });
    }

    // Criar um novo usuário
    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao registrar o usuário' });
  }
};

module.exports = { register };
