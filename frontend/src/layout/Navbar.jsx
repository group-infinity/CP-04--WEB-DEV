import { useState, useEffect } from "react";

import Logo from "../assets/navbar/logo.png";

import Menu from "../assets/navbar/menu.png";

import Avatar from "../assets/navbar/avatar.png";

import Fechar from "../assets/navbar/fechar.png";
 
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
 
  return (
<header className="fixed z-999 flex h-16 w-screen justify-between bg-[#000] px-6 py-2.5 lg:h-20">
<div className="flex gap-1">
<a href="">
<img src={Logo} alt="Logo do Passa a Bola" className="h-11 lg:h-15" />
</a>
</div>
 
      <div className="flex items-center gap-2.5">
<a href="#" className="cursor-pointer">
<img src={Avatar} alt="Profile icon" className="size-6 lg:size-10" />
</a>
 
        <button

          className="cursor-pointer"

          onClick={() => {

            setAtivo(!ativo);

          }}
>
<img src={Menu} alt="Menu" className="size-6 lg:size-10" />
</button>
</div>
 
      <span

        className={`bg-opacity-100 absolute inset-0 h-dvh bg-black transition-opacity duration-300 ease-in-out ${ativo ? "opacity-50" : "pointer-events-none opacity-0"} `}

        onClick={() => {

          setAtivo(!ativo);

        }}
></span>
 
      <div

        className={`absolute top-0 right-0 flex h-dvh w-2/3 flex-col items-end justify-between bg-[#000] p-6 transition-transform duration-300 ease-in-out md:w-1/3 lg:w-1/4 ${ativo ? "translate-x-0" : "translate-x-full"} `}
>
<button

          onClick={() => {

            setAtivo(!ativo);

          }}
>
<img

            src={Fechar}

            className="h-6 w-6 cursor-pointer"

            alt="Fechar Menu"

          />
</button>
 
        <nav className="max-w-[99%] h-full flex items-center self-start">
<ul className="flex w-full flex-col gap-3.5 text-left text-2xl font-bold text-white uppercase">
<li>próximos encontros</li>
<li>Placares e noticias</li>
<li>sobre</li>
</ul>
</nav>
 
      </div>
</header>

  );

}
 
export default Navbar;

 