const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

app.use(bodyParser.json());
app.use('/', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

// Configurações do dotenv para variáveis de ambiente
dotenv.config();
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  // Lógica para registrar o usuário no banco de dados
  res.status(201).send({ message: 'Usuário registrado com sucesso!' });
});

const app = express(); // Inicialização do app antes de usar!

// Middlewares
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

// Definindo as rotas
const authRoutes = require('./routes/auth'); // Corrigir o caminho para suas rotas
app.use('/api', authRoutes); // Use a rota correta

// Iniciar o servidor
const PORT = process.env.PORT || 10000; // Mudei para 10000 como especificado
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
