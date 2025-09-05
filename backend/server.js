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
  {
    nome: "Jeep",
    preco: "R$ 310.000",
    imagem: "imgs/jeep.webp", // use o caminho da sua pasta public
  },
  {
    nome: "Tesla Cybertruck",
    preco: "R$ 600.000",
    imagem: "imgs/imagem3.jpg",
  },
  {
    nome: "Tesla Model S",
    preco: "R$ 650.000",
    imagem: "imgs/teslaModelS.avif",
  },
  {
    nome: "BYD Seal",
    preco: "R$ 650.000",
    imagem: "imgs/imagem2.jpg",
  },
];

const lojas = [
  { id: 1, nome: 'Infinity Cars - Matriz', endereco: 'Rua Alfa, 123 - Centro', telefone: '(11) 3333-0000', imagem: '/img/loja-matriz.jpg' },
  { id: 2, nome: 'Infinity Cars - Filial Norte', endereco: 'Av. Beta, 456 - Bairro Norte', telefone: '(11) 3333-1111', imagem: '/img/loja-norte.jpg' },
];

const sobre = {
  titulo: 'Sobre a Infinity Cars',
  conteudo: 'A INFINITY CARS é uma empresa especializada na venda de veículos, atuando tanto no segmento de luxo, com marcas renomadas, quanto no mercado de seminovos e multimarcas, oferecendo opções para diferentes perfis de clientes. Entre as inovações do setor, destaca-se a chegada dos carros elétricos, que trazem benefícios como menor impacto ambiental, economia no abastecimento, baixa manutenção e uma experiência de condução mais confortável e silenciosa.',
  imagem: 'imgs/logo.png',
};

const contato = {
  email: 'contato@infinitycars.com',
  telefone: '(11) 3333-2222',
  endereco: 'Rua Alfa, 123 - Centro, São Paulo - SP',
  imagem: '/img/contato.jpg',
};

const erro = {
  msg: "Erro 404"
}

// --- rotas solicitadas ---
app.get('/carros',  (req, res) => res.json(carros));
app.get('/lojas',   (req, res) => res.json(lojas));
app.get('/sobre',   (req, res) => res.json(sobre));
app.get('/contato', (req, res) => res.json(contato));

// 404
app.use((req, res) => {
  if(res.status(404)){
    app.get('/erro', (req, res) => res.json(erro));
  }
});

// erro genérico
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

// start
app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
});
