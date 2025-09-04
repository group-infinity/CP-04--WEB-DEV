import React from "react";
 
function CarCard({ nome, preco, imagem }) {
  return (
<div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
<img src={imagem} alt={nome} className="w-full h-48 object-cover" />
<div className="p-4">
<h3 className="text-lg font-semibold text-gray-800">{nome}</h3>
<p className="text-gray-600">{preco}</p>
<button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Ver detalhes
</button>
</div>
</div>  
  );
}
 
export default function CarrosPage() {
  const carros = [
    {
      nome: "Ford Mustang",
      preco: "R$ 350.000",
      imagem:
        "./imgs/mustang.webp",
    },
    {
      nome: "Tesla Model S",
      preco: "R$ 620.000",
      imagem:
        "./imgs/teslaModelS.avif",
    },
    {
      nome: "Jeep Wrangler",
      preco: "R$ 280.000",
      imagem:
        "./imgs/jeep.webp",
    },
  ];
 
  return (
<section className="p-6">
<h1 className="text-2xl font-bold mb-6">Carros Disponíveis</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {carros.map((carro, i) => (
<CarCard
            key={i}
            nome={carro.nome}
            preco={carro.preco}
            imagem={carro.imagem}
          />
        ))}
</div>
</section>
  );
}