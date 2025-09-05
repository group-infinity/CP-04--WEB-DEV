// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

// middlewares
app.use(cors());           // libera o front em dev
app.use(express.json());

// --- dados de exemplo ---
const carros = [
  { id: 1, marca: 'Ford', modelo: 'Mustang', ano: 2020, preco: 250000, imagem: '/img/mustang.jpg' },
  { id: 2, marca: 'Chevrolet', modelo: 'Camaro', ano: 2021, preco: 270000, imagem: '/img/camaro.jpg' },
  { id: 3, marca: 'BMW', modelo: 'M3', ano: 2022, preco: 520000, imagem: '/img/bmw-m3.jpg' },
];

const lojas = [
  { id: 1, nome: 'Infinity Cars - Matriz', endereco: 'Rua Alfa, 123 - Centro', telefone: '(11) 3333-0000', imagem: '/img/loja-matriz.jpg' },
  { id: 2, nome: 'Infinity Cars - Filial Norte', endereco: 'Av. Beta, 456 - Bairro Norte', telefone: '(11) 3333-1111', imagem: '/img/loja-norte.jpg' },
];

const sobre = {
  titulo: 'Sobre a Infinity Cars',
  conteudo: 'A Infinity Cars é especializada em esportivos e premium. Atuamos com transparência e garantia.',
  imagem: '/img/sobre.jpg',
};

const contato = {
  email: 'contato@infinitycars.com',
  telefone: '(11) 3333-2222',
  endereco: 'Rua Alfa, 123 - Centro, São Paulo - SP',
  imagem: '/img/contato.jpg',
};

// --- rotas solicitadas ---
app.get('/carros',  (req, res) => res.json(carros));
app.get('/lojas',   (req, res) => res.json(lojas));
app.get('/sobre',   (req, res) => res.json(sobre));
app.get('/contato', (req, res) => res.json(contato));

// 404
app.use((req, res) => res.status(404).json({ error: 'Rota não encontrada' }));

// erro genérico
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

// start
app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
});
