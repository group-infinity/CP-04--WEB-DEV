import { useState } from "react";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home.jsx";
import Carros from "./pages/Carros.jsx";
import Contato from "./pages/Contato.jsx";
import Lojas from "./pages/Lojas.jsx";
import Sobre from "./pages/Sobre.jsx";
import Footer from "./layout/Footer.jsx";

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
      case "erro":
        return <Erro />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <div id="root" className="flex flex-col min-h-screen">
        <Navbar irParaPagina={setPaginaAtual}></Navbar>
        <main className="flex justify-center mt-16 lg:mt-20 grow">{renderizarPagina()}</main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
