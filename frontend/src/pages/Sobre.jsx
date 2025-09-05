import React, { useState, useEffect } from "react";

const Sobre = () => {
  const [sobre, setSobre] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/sobre`)
      .then((response) => response.json())
      .then((data) => setSobre(data))
      .catch((error) => console.error("Erro ao buscar carros:", error));
  }, []);

  return (
    <>
      <div className="px-5 lg:max-w-[80%] w-full flex flex-col gap-10 text-5xl font-black py-10">
        <div className="flex items-center gap-2.5">
          <h1 className="uppercase ">sobre nós</h1>
          <span className="h-1 w-full bg-red-600"></span>
        </div>

        <div className="bg-[rgba(0,0,0,0.85)] p-10 flex flex-col gap-10 rounded-sm">
            <div className="text-white text-2xl font-bold flex flex-col items-center gap-10">
              <img src={sobre.imagem} alt="Logo da Infinity Cars" className="max-w-70 w-full" />

              {/* <h4 className="text-4xl uppercase font-black w-full">{sobre.titulo}</h4> */}

              <p className="font-normal text-lg">{sobre.conteudo}</p>
            </div>
        </div>
        <div>


        </div>
      </div>
    </>
  );
};

export default Sobre;
