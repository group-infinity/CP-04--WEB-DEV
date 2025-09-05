import React, { useState, useEffect } from "react";

const Carros = () => {
    const[carros, setCarros] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/carros')
          .then(response => response.json())
          .then(data => setCarros(data))
          .catch(error => console.error('Erro ao buscar carros:', error));
      }, []);

  return (
    <div>Carros</div>
  )
}

export default Carros