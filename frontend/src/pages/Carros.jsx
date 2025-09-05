import React, { useState, useEffect } from "react";
import CarCard from "../components/CarCard";

const Carros = () => {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/carros`)
      .then((response) => response.json())
      .then((data) => setCarros(data))
      .catch((error) => console.error("Erro ao buscar carros:", error));
  }, []);

  console.log(carros);

  return (
    <>
      <div className="px-5 lg:max-w-[80%] w-full flex flex-col gap-10 text-5xl font-black py-10">
        <div className="flex items-center">
            <h1 className="uppercase ">nossos carros</h1>
            <span className="h-1 w-full bg-red-600"></span>
        </div>

        <div className="flex flex-wrap gap-4">
          {carros.map((e, index) => (
            <CarCard
              key={index}
              nome={e.nome}
              preco={e.preco}
              imagem={e.imagem}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carros;
