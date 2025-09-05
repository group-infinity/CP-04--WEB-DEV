import React, { useState, useEffect } from "react";

const Sobre = () => {
  const [sobre, setSobre] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/carros")
      .then((response) => response.json())
      .then((data) => setSobre(data))
      .catch((error) => console.error("Erro ao buscar carros:", error));
  }, []);

  return <div>Sobre</div>;
};

export default Sobre;
