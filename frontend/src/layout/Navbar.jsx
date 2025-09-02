import { useState, useEffect } from "react";
import Logo from "../assets/navbar/logo.png";
import Menu from "../assets/navbar/menu.png";
import Avatar from "../assets/navbar/avatar.png";
import Fechar from "../assets/navbar/fechar.png";
import "./Navbar.css";

function Navbar() {
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

  return (
    <header className="navbar-header">
      <div className="navbar-logo-container">
        <img src={Logo} alt="Logo da Infinity Cars" className="logo-img" />
      </div>

      <div className="navbar-icons-container">
        <button className="navbar-button">
          <img src={Avatar} alt="Profile icon" className="icon-img" />
        </button>

        <button className="navbar-button" onClick={toggleMenu}>
          <img src={Menu} alt="Menu" className="icon-img" />
        </button>
      </div>

      <span className={`overlay ${ativo ? "active" : ""}`} onClick={toggleMenu} aria-hidden="true"></span>

      <div id="menu-sidebar" className={`menu-sidebar ${ativo ? "active" : ""}`}>
        <div className="sidebar-content">
          <button className="navbar-button close-button" onClick={toggleMenu}>
            <img src={Fechar} alt="Menu" className="icon-img" />
          </button>

          <nav className="menu-nav">
            <ul className="menu-list">
              <li>
                <a href="#">carros</a>
              </li>
              <li>
                <a href="#">lojas</a>
              </li>
              <li>
                <a href="#">sobre</a>
              </li>
              <li>
                <a href="#">contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
