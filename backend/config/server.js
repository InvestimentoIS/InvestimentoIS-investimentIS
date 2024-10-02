const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Adicione esta linha antes de definir as rotas
app.use(cors());

// Configuração do dotenv
dotenv.config();

// Inicializa o app
const app = express();
app.use(express.json());

// Conecta ao MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB conectado'))
  .catch((err) => console.log('Erro ao conectar ao MongoDB:', err));

// Rotas de login e cadastro
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Inicia o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
