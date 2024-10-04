// Importações necessárias
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const routes = require('./routes'); // Corrigir o caminho de acordo com a estrutura do seu projeto

// Inicialização do app
const app = express(); 

// Configurações do dotenv para variáveis de ambiente
dotenv.config();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); // Middleware para analisar JSON

// Definindo rotas
app.use('/', routes); // Rota principal
const authRoutes = require('./routes/auth'); // Corrigir o caminho para suas rotas
app.use('/api', authRoutes); // Use a rota correta para as APIs de autenticação

// Rota para registro de usuário (exemplo)
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  // Lógica para registrar o usuário no banco de dados
  res.status(201).send({ message: 'Usuário registrado com sucesso!' });
});

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => {
  console.log('Conectado ao MongoDB');
})
.catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

// Iniciar o servidor
const PORT = process.env.PORT || 10000; // Porta configurada ou padrão 10000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
