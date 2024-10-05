const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('../routes/auth'); // Volta uma pasta para acessar o auth.js
require('dotenv').config();
const cors = require('cors');

// Inicializa o app
const app = express();

// Habilita CORS para o frontend hospedado no GitHub Pages
const corsOptions = {
  origin: 'https://investimentois.github.io',  // Frontend no GitHub Pages
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

// Middleware para JSON
app.use(express.json());

// Rotas de autenticação
app.use('/api', authRoutes); // Rota base para a autenticação

// Porta do servidor
const PORT = process.env.PORT || 5000;

// Conexão com o MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });
