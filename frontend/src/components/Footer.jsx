import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 space-y-10">
        
        {/* Logo + Descrição em horizontal */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-6">
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="text-red-600 text-4xl font-bold">∞</div>
            <div className="flex flex-col">
              <span className="text-red-600 font-bold text-lg">INFINITY</span>
              <span className="font-bold text-lg text-white">CARS</span>
            </div>
          </div>
          <p className="mt-4 md:mt-0 text-sm leading-relaxed max-w-4xl">
            A <strong>INFINITY CARS</strong> é uma empresa especializada na venda de veículos, atuando tanto no segmento de luxo, com marcas renomadas, quanto no mercado de seminovos e multimarcas, oferecendo opções para diferentes perfis de clientes. Entre as inovações do setor, destaca-se a chegada dos <strong>carros elétricos</strong>, que trazem benefícios como menor impacto ambiental, economia no abastecimento, baixa manutenção e uma experiência de condução mais confortável e silenciosa.
          </p>
        </div>

        {/* Navegação + Contato embaixo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Links de navegação */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-white font-semibold text-lg">Navegação</h4>
            <a href="#sobre" className="hover:text-red-500 transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-red-500 transition-colors">Serviços</a>
            <a href="#contato" className="hover:text-red-500 transition-colors">Contato</a>
          </div>

          {/* Contato */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-white font-semibold text-lg">Contato</h4>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-red-500" /> (11) 12345-6789
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-red-500" /> infinitycars@gmail.com
            </p>

            {/* Redes sociais */}
            <div className="flex gap-4 mt-3">
              <a href="#" className="hover:text-red-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Infinity Cars. Todos os direitos reservados.</p>
          <p>
            Criado por{" "}
            <span className="text-red-500 font-semibold hover:underline cursor-pointer">
              Infinity Group
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
