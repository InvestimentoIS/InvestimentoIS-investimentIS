const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('../routes/auth'); // Volta uma pasta para acessar o auth.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Habilite CORS para o frontend hospedado no GitHub Pages
const corsOptions = {
  origin: 'https://investimentois.github.io',  // seu frontend no GitHub Pages
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

// Outros middlewares e rotas aqui...

const app = express();

app.use(express.json());
app.use('/api', authRoutes); // Rota base para a autenticação

const PORT = process.env.PORT || 5000;

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
