import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import CarCard from "../components/CarCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

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

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/carros")
      .then((response) => response.json())
      .then((data) => setCarros(data))
      .catch((error) => console.error("Erro ao buscar carros:", error));
  }, []);

  return (
    <main id="home" className="relative w-full text-white flex-col items-center">
      <div className="relative h-dvh">
        <Swiper
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
          pagination={{ clickable: true }}
          navigation={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="h-full w-full"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/70 to-transparent" />
            </SwiperSlide>
          ))}

          <div className="absolute inset-0 items-center flex justify-center z-10">
            <div className="text-center w-full max-w-5xl mx-auto pb-24 md:pb-28 px-4 flex justify-center">
              <AnimatePresence mode="wait">
                <motion.div key={activeIndex} initial="hidden" animate="visible" exit="hidden" transition={{ staggerChildren: 0.2 }} className="w-fit flex flex-col items-center gap-5">
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

        <div className="swiper-button-prev z-20"></div>
        <div className="swiper-button-next z-20"></div>
      </div>

      <section className="w-full flex justify-center p-5">
        <div className="py-5 px-2 lg:max-w-[80%] w-full flex flex-wrap gap-4">
          {carros.map((e, index) => (
            <CarCard
              key={index}
              nome={e.nome}
              preco={e.preco}
              imagem={e.imagem}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
