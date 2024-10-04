const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('../routes/auth'); // Volta uma pasta para acessar o auth.js
require('dotenv').config();

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
