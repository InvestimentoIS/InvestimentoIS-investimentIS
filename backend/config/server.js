// Importações necessárias
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// Configurações do dotenv para variáveis de ambiente
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Middleware para analisar JSON

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => {
    console.log('Conectado ao MongoDB');
})
.catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

// Usar as rotas
const routes = require('../routes'); // Corrigido para apontar para o index.js dentro de routes
app.use('/api', routes); // Acesse as rotas em /api/auth

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
