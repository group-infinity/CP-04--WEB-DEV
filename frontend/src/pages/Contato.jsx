import { useState, useEffect } from "react";

const Contato = () => {
  const [contato, setContato] = useState({
    email: "",
    telefone: "",
    endereco: [],
  });

  useEffect(() => {
    fetch("http://localhost:5001/contato")
      .then((response) => response.json())
      .then((data) => setContato(data))
      .catch((error) => console.error("Erro ao buscar carros:", error));
  }, []);

  console.log(contato);

  return (
    <>
      <div className="px-5 lg:max-w-[80%] w-full flex flex-col gap-10 text-5xl font-black py-10">
        <div className="flex items-center gap-2.5">
          <h1 className="uppercase ">Contato</h1>
          <span className="h-1 w-full bg-red-600"></span>
        </div>

        <div className="bg-[rgba(0,0,0,0.85)] p-10 flex flex-col gap-10 rounded-sm text-white text-2xl font-bold ">
          <p className="font-normal">
            <strong>Email:</strong> {contato.email}
          </p>
          <p className="font-normal">
            <strong>Telefone:</strong> {contato.telefone}
          </p>
          <address className="font-normal">
            <strong>Endereço: </strong>
            <div>
              {contato.endereco.map((i, index) => (
                <p key={index}>
                  {i}
                  <br />
                </p>
              ))}
            </div>
          </address>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Contato;
