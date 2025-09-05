import React, { useState, useEffect } from "react";

const Lojas = () => {
  const [lojas, setLojas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/carros")
      .then((response) => response.json())
      .then((data) => setLojas(data))
      .catch((error) => console.error("Erro ao buscar carros:", error));
  }, []);

  return <div>Lojas</div>;
};

export default Lojas;
