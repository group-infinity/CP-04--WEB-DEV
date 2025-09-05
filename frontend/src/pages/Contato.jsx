import {useState, useEffect} from 'react'

const Contato = () => {
  const [contato, setContato] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/carros")
      .then((response) => response.json())
      .then((data) => setContato(data))
      .catch((error) => console.error("Erro ao buscar carros:", error));
  }, []);

  return <div>Contato</div>;
};

export default Contato;
