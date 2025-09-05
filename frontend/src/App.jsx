import { useState } from "react"
import Navbar from "./layout/Navbar";
import Home from "./pages/Home.jsx";
import Carros from "./pages/Carros.jsx"
import Contato from "./pages/Contato.jsx";
import Lojas from "./pages/Lojas.jsx";
import Sobre from "./pages/Sobre.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [paginaAtual, setPaginaAtual] = useState("home");

  const renderizarPagina = () => {
    switch (paginaAtual) {
      case "carros":
        return <Carros />;
      case "lojas":
        return <Lojas />;
      case "sobre":
        return <Sobre />;
      case "contato":
        return <Contato />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Navbar irParaPagina={setPaginaAtual}></Navbar>
      <main>{renderizarPagina()}</main>
      <Footer></Footer>
    </>
  );
}

export default App;
