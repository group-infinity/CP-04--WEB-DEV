import React, { useState, useEffect } from "react";

const Lojas = () => {
  const [lojas, setLojas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/lojas")
      .then((response) => response.json())
      .then((data) => setLojas(data))
      .catch((error) => console.error("Erro ao buscar carros:", error));
  }, []);

  return (
    <>
      <div className="px-5 lg:max-w-[80%] w-full flex flex-col gap-10 text-5xl font-black py-10">
        <div className="flex items-center gap-2.5">
          <h1 className="uppercase ">lojas</h1>
          <span className="h-1 w-full bg-red-600"></span>
        </div>

        <div className="bg-[rgba(0,0,0,0.85)] p-10 flex flex-col gap-10 rounded-sm">
          {lojas.map((e, index) => (
            <div key={index} className="text-white text-2xl font-bold">
              <h4>{e.nome}</h4>

              <address>{e.endereco}</address>
              
              <p>{e.telefone}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Lojas;
