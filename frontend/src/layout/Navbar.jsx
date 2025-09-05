import { useState, useEffect } from "react";
import Logo from "../assets/navbar/logo.png";
import Menu from "../assets/navbar/menu.png";
import Avatar from "../assets/navbar/avatar.png";
import Fechar from "../assets/navbar/fechar.png";

function Navbar({irParaPagina}) {
   const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    if (ativo) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [ativo]);

  const toggleMenu = () => {
    setAtivo(!ativo);
  };

  const handleNavigation = (pagina) => {
    irParaPagina(pagina);
    setAtivo(false);
  };

  return (
    <header className="fixed top-0 left-0 z-[999] flex h-16 w-full items-center justify-between bg-black px-6 py-2.5 lg:h-20">
      <div className="flex items-center">
        <a href="#">
          <img src={Logo} alt="Logo da Infinity Cars" className="w-[100px] lg:w-[150px]" onClick={() => handleNavigation('home')} />
        </a>
      </div>

      <div className="flex items-center gap-2.5">
        <a href="#" className="cursor-pointer">
          <img src={Avatar} alt="Profile icon" className="h-6 w-6 lg:h-8 lg:w-8" />
        </a>

        <button className="cursor-pointer" onClick={toggleMenu}>
          <img src={Menu} alt="Menu" className="h-6 w-6 lg:h-8 lg:w-8" />
        </button>
      </div>

      <span
        className={`absolute inset-0 h-screen bg-black transition-opacity duration-300 ease-in-out ${
          ativo ? "opacity-50" : "pointer-events-none opacity-0"
        }`}
        onClick={toggleMenu}
        aria-hidden="true"
      ></span>

      <div
        className={`fixed top-0 right-0 z-[1000] flex h-screen w-2/3 flex-col justify-between bg-black p-6 transition-transform duration-300 ease-in-out md:w-1/3 lg:w-1/4 ${
          ativo ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="self-end">
            <button onClick={toggleMenu}>
              <img src={Fechar} className="h-6 w-6 cursor-pointer" alt="Fechar Menu" />
            </button>
          </div>

          <nav className="flex h-full items-center">
            <ul className="flex flex-col gap-6 text-2xl font-bold uppercase text-white">
              <li>
                <a onClick={() => handleNavigation('carros')}>carros</a>
              </li>
              <li>
                <a onClick={() => handleNavigation('lojas')}>lojas</a>
              </li>
              <li>
                <a onClick={() => handleNavigation('sobre')}>sobre</a>
              </li>
              <li>
                <a onClick={() => handleNavigation('contato')}>contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;