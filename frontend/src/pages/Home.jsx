import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import CarCard from "../components/CarCard";

// 1. Importe o Swiper e seus módulos
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";

// 2. Importe o CSS do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// 3. Defina os dados dos slides (imagens e textos)
const slidesData = [
  {
    image: "/imgs/carroMustang.jpg",
    headline: (
      <>
        Pura Emoção
        <br />
        Elétrica
      </>
    ),
    subheadline: "Sinta a potência instantânea e o design que define o futuro da velocidade.",
  },
  {
    image: "/imgs/cambio.jpg",
    headline: (
      <>
        Inovação que
        <br />
        Impressiona
      </>
    ),
    subheadline: "Descubra a tecnologia de ponta que transforma cada viagem em uma experiência única.",
  },
  {
    image: "/imgs/jeta.webp",
    headline: (
      <>
        Luxo e Conforto
        <br />
        Inigualáveis
      </>
    ),
    subheadline: "Um santuário de materiais nobres e design inteligente, criado para o seu bem-estar.",
  },
];

const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const carros = [
  {
    nome: "Jeep",
    preco: "R$ 310.000",
    imagem: "imgs/jeep.webp", // use o caminho da sua pasta public
  },
  {
    nome: "Tesla Cybertruck",
    preco: "R$ 600.000",
    imagem: "imgs/imagem3.jpg",
  },
  {
    nome: "Tesla Model S",
    preco: "R$ 650.000",
    imagem: "imgs/teslaModelS.avif",
  },
  {
    nome: "BYD Seal",
    preco: "R$ 650.000",
    imagem: "imgs/imagem2.jpg",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main id="home" className="relative w-full text-white flex-col items-center">
      <div className="h-dvh">
        <Swiper
          // 4. Configure o Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          fadeEffect={{ crossFade: true }}
          pagination={{ clickable: true }} // Bolinhas de navegação
          navigation={true} // Setas de navegação
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="h-full w-full"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              {/* Background com Imagem e Gradiente */}
              <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/70 to-transparent" />
            </SwiperSlide>
          ))}

          {/* Conteúdo de Texto Animado */}
          <div className="absolute inset-0 items-center flex justify-center z-10">
            <div className="text-center w-full max-w-5xl mx-auto pb-24 md:pb-28 px-4 flex justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex} // A "mágica" para re-animar o texto a cada slide
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ staggerChildren: 0.2 }}
                  className="w-fit flex flex-col items-center gap-5"
                >
                  <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter" style={{ textShadow: "3px 3px 15px rgba(0,0,0,0.8)" }} variants={textVariants}>
                    {slidesData[activeIndex].headline}
                  </motion.h1>
                  <motion.p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-gray-300" variants={textVariants}>
                    {slidesData[activeIndex].subheadline}
                  </motion.p>
                  <motion.div variants={textVariants} className="mt-8 flex justify-center">
                    <a
                      href="#carros"
                      className="flex items-center gap-3 bg-red-600 text-white font-bold text-lg rounded-md
                               shadow-lg shadow-red-500/30 p-2
                               hover:bg-red-700 hover:scale-105 transform transition-all duration-300"
                    >
                      Conheça os Modelos
                      <FiArrowRight size={22} />
                    </a>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Swiper>
      </div>
      <section className="w-full flex justify-center p-5">
        <div className="py-5 px-2 lg:max-w-[80%] w-full flex flex-wrap gap-4">
          {carros.map((e) => (
            <CarCard key={e.i} nome={e.nome} preco={e.preco} imagem={e.imagem} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Hero;